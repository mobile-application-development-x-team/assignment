package com.ngocthach.appfindwork.Fragment;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.ngocthach.appfindwork.Model.ItemJob;
import com.ngocthach.appfindwork.R;
import com.ngocthach.appfindwork.adapter.AdapterFindJob;
import com.ngocthach.appfindwork.setOnClickItemListener;
import com.ngocthach.appfindwork.presenter.InFindJob;
import com.ngocthach.appfindwork.presenter.PresenterFindJob;
import com.ngocthach.appfindwork.utils.Constants;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class JobFragment extends Fragment implements InFindJob, setOnClickItemListener {

    public static JobFragment newInstance(String info) {
        Bundle args = new Bundle();
        JobFragment fragment = new JobFragment();
        args.putString("info", info);
        fragment.setArguments(args);
        return fragment;
    }

    PresenterFindJob mPresenterFindJob;
    private SwipeRefreshLayout mSwipeRefreshLayout;
    public List<ItemJob> list_job;
    private int pageToDownload = 0;
    RecyclerView mRecyclerView;
    private AdapterFindJob mAdapterFindJob;
    private Handler handler;
    private Toolbar toolbar;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_work, container, false);

//        toolbar = (Toolbar) view.findViewById(R.id.toolbar);
        toolbar = (Toolbar) view.findViewById(R.id.toolbar_job);
        AppCompatActivity activity = (AppCompatActivity) getActivity();
        activity.setSupportActionBar(toolbar);
        setHasOptionsMenu(true);
        toolbar.setTitle(getResources().getString(R.string.title_job));

        mPresenterFindJob = new PresenterFindJob(this);
        mSwipeRefreshLayout = view.findViewById(R.id.swiperefresh);
        mRecyclerView = view.findViewById(R.id.recyclerview);
        mPresenterFindJob.getDataFindJob();
        initViews();


        mSwipeRefreshLayout.setOnRefreshListener(
                new SwipeRefreshLayout.OnRefreshListener() {
                    @Override
                    public void onRefresh() {
                        doYourUpdate();
                    }
                }
        );

        return view;
    }

    private void initViews() {
        list_job = new ArrayList<>();
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getActivity());
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setItemAnimator(new DefaultItemAnimator());
        mRecyclerView.setHasFixedSize(true);
        mSwipeRefreshLayout.setRefreshing(false);

        mAdapterFindJob = new AdapterFindJob(getActivity(), list_job, mRecyclerView, this);
        mRecyclerView.setAdapter(mAdapterFindJob);
        mAdapterFindJob.setOnLoadMoreListener(new AdapterFindJob.OnLoadMoreListener() {
            @Override
            public void onLoadmore() {
                list_job.add(null);
                mAdapterFindJob.notifyItemInserted(list_job.size() - 1);
                if (list_job.size() >= 20) {
                    Log.d("pageToDownload ", "onLoadmore communi: " + pageToDownload);
                    ++pageToDownload;
                    mPresenterFindJob.getDataFindJob();
                }
            }
        });
    }

    private void doYourUpdate() {
        // Disables the refresh icon
        mSwipeRefreshLayout.setRefreshing(true);
        pageToDownload = 0;
        mPresenterFindJob.getDataFindJob();
    }

    @Override
    public void SuccessFindJob(JSONArray response) {
        try {
            if (mSwipeRefreshLayout.isRefreshing()) {
                mSwipeRefreshLayout.setRefreshing(false);
            }
            if (pageToDownload > 0) {
                list_job.remove(list_job.size() - 1);
                mAdapterFindJob.notifyItemRemoved(list_job.size());
            } else {
                list_job.clear();
                mAdapterFindJob.notifyDataSetChanged();
            }
            for (int i = 0; i < response.length(); i++) {
                JSONObject feedOb_Job = (JSONObject) response.get(i);
                ItemJob item = new ItemJob(feedOb_Job.getInt("favorited"),
                        feedOb_Job.getString("_id"),
                        feedOb_Job.getString("title"),
                        feedOb_Job.getString("place"),
                        feedOb_Job.getString("image"),
                        feedOb_Job.isNull("description") ? null : feedOb_Job.getString("description")
                );
                mAdapterFindJob.jobList.add(item);
            }
            if (response.length() >= 20) {
                mAdapterFindJob.setLoaded();
            }

            mRecyclerView.setAdapter(mAdapterFindJob);

        } catch (JSONException e) {
            e.printStackTrace();
        }


    }


    @Override
    public void ErrorFindJob(int Error) {


    }

    @Override
    public void onItemClick(int position, int i, RecyclerView.ViewHolder v) {
        if (i == 0) {
            mPresenterFindJob.post_Favorit(list_job.get(position).getId(), 0);

        } else {
            mPresenterFindJob.post_Favorit(list_job.get(position).getId(), 1);
        }
        Intent a = new Intent();
        a.setAction(Constants.ACTION_RELOAD_SAVE_FRAGMENT);
        a.putExtra("reload_SaveFragment", true);
        a.putExtra("favorited", i);
        a.putExtra("id", list_job.get(position).getId());
        a.putExtra("title", list_job.get(position).getTitle());
        a.putExtra("place", list_job.get(position).getPlace());
        a.putExtra("image", list_job.get(position).getImage());
        a.putExtra("description", list_job.get(position).getDescription());
        getActivity().sendBroadcast(a);

    }

    @Override
    public void onResume() {
        Log.d("systemssss", " onResume run JonFragment ");
        getActivity().registerReceiver(appendChatScreenMsgReceiver, new IntentFilter(Constants.ACTION_RELOAD_JOB_FRAGMENT));
        super.onResume();

    }

    @Override
    public void onPause() {
        super.onPause();
        Log.d("systemssss", " onPause run JonFragment ");
    }

    @Override
    public void onStop() {
        super.onStop();
        Log.d("systemssss", " onStop run JonFragment ");
    }

    BroadcastReceiver appendChatScreenMsgReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            Bundle bundle = intent.getExtras();
            if (bundle != null) {
                if (bundle.getBoolean("reload_JobFragment")) {
                    Log.d("pageToDownload ", "onLoadmore communi: " + pageToDownload);
                    mPresenterFindJob.getDataFindJob();
                }
            }
        }
    };

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        inflater.inflate(R.menu.menu_main, menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.menu_search) {
//            toolbar.setVisibility(View.GONE);
            FragmentSearch fragmentsearch = new FragmentSearch();
            loadFragment(fragmentsearch);
            Log.d("memu jobFrgment ", ".................. yes ");

        }
        return super.onOptionsItemSelected(item);
    }

    private void loadFragment(Fragment fragment) {
        // load fragment
        FragmentTransaction transaction = getActivity().getSupportFragmentManager().beginTransaction();
        transaction.replace(R.id.fragment_job, fragment);
        transaction.addToBackStack(null);
        transaction.commit();
    }


}