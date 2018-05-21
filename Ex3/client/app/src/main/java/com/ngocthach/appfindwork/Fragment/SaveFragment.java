package com.ngocthach.appfindwork.Fragment;

import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.ngocthach.appfindwork.Model.ItemJob;
import com.ngocthach.appfindwork.R;
import com.ngocthach.appfindwork.adapter.AdapterSaveJob;
import com.ngocthach.appfindwork.setOnClickItemListener;
import com.ngocthach.appfindwork.presenter.InSaveJob;
import com.ngocthach.appfindwork.presenter.PresenterSaveJob;
import com.ngocthach.appfindwork.utils.Constants;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class SaveFragment extends Fragment implements InSaveJob, setOnClickItemListener {

    public static SaveFragment newInstance(String info) {
        Bundle args = new Bundle();
        SaveFragment fragment = new SaveFragment();
        args.putString("info", info);
        fragment.setArguments(args);
        return fragment;
    }

    PresenterSaveJob mPresenterSaveJob;
    private SwipeRefreshLayout mSwipeRefreshLayout;

    public List<ItemJob> list_save;
    private int pageToDownload;
    RecyclerView mRecyclerView;
    private AdapterSaveJob mAdapterSaveJob;
    private Handler handler;
    Toolbar toolbar;


    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_save, container, false);

//        toolbar = (Toolbar) view.findViewById(R.id.toolbar_save);
//        AppCompatActivity activity = (AppCompatActivity) getActivity();
//        activity.setSupportActionBar(toolbar);
////        setHasOptionsMenu(true);
//        toolbar.setTitle(getResources().getString(R.string.title_save));


        mPresenterSaveJob = new PresenterSaveJob(this);
        mSwipeRefreshLayout = view.findViewById(R.id.swiperefresh);
        mPresenterSaveJob.getDataFavorited();
        mRecyclerView = view.findViewById(R.id.recyclerview_save);
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
        list_save = new ArrayList<>();
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getActivity());
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setItemAnimator(new DefaultItemAnimator());
        mRecyclerView.setHasFixedSize(true);
        mSwipeRefreshLayout.setRefreshing(false);

        mAdapterSaveJob = new AdapterSaveJob(getActivity(), list_save, mRecyclerView, this);
        mRecyclerView.setAdapter(mAdapterSaveJob);
        mAdapterSaveJob.setOnLoadMoreListener(new AdapterSaveJob.OnLoadMoreListener() {
            @Override
            public void onLoadmore() {
                list_save.add(null);
                mAdapterSaveJob.notifyItemInserted(list_save.size() - 1);
                if (list_save.size() >= 20) {
                    Log.d("pageToDownload ", "onLoadmore communi: " + pageToDownload);
                    ++pageToDownload;
                    Log.d("pageToDownload ", "onLoadmore communi: " + pageToDownload);
                    mPresenterSaveJob.getDataFavorited();
                }
            }
        });
    }

    private void doYourUpdate() {
        // Disables the refresh icon
        mSwipeRefreshLayout.setRefreshing(true);
        pageToDownload = 0;
        mPresenterSaveJob.getDataFavorited();
    }

    @Override
    public void SuccessSaveJob(JSONArray response) {
        try {
            if (mSwipeRefreshLayout.isRefreshing()) {
                mSwipeRefreshLayout.setRefreshing(false);
            }
            if (pageToDownload > 0) {
                list_save.remove(list_save.size() - 1);
                mAdapterSaveJob.notifyItemRemoved(list_save.size());
            } else {
                list_save.clear();
                mAdapterSaveJob.notifyDataSetChanged();
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
                mAdapterSaveJob.List_Save.add(item);
            }
            mRecyclerView.setAdapter(mAdapterSaveJob);

        } catch (JSONException e) {
            e.printStackTrace();
        }


    }

    @Override
    public void SuccessdeleteSave(JSONArray response) {
        Toast.makeText(getActivity(), "Xóa thành công!", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void ErrorSaveJob(int Error) {

    }

    @Override
    public void onItemClick(int position, int i, RecyclerView.ViewHolder v) {
        ItemJob itemJob = list_save.get(position);

        if (i == 0) {
            Dialog_delete_save(itemJob.getTitle(), position,itemJob.getId());
        }
    }


    private void Dialog_delete_save(String message , final int position,final String id) {
        final AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle(R.string.delete);
        builder.setMessage(message);
        builder.setPositiveButton(R.string.ok,
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        mPresenterSaveJob.post_Favorit(id,0);
                        mAdapterSaveJob.List_Save.remove(position);
                        mAdapterSaveJob.notifyDataSetChanged();
                        Intent a = new Intent();
                        a.setAction(Constants.ACTION_RELOAD_JOB_FRAGMENT);
                        a.putExtra("reload_JobFragment", true);
                        getActivity().sendBroadcast(a);

                    }
                });

        builder.setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getActivity(), "cancel", Toast.LENGTH_SHORT).show();
            }
        });
        builder.setCancelable(false);
        builder.show();
    }


    @Override
    public void onResume() {
        Log.d("systemssss"," onResume run SaveFragment ");
        getActivity().registerReceiver(appendChatScreenMsgReceiver, new IntentFilter(Constants.ACTION_RELOAD_SAVE_FRAGMENT));
        super.onResume();

    }

    @Override
    public void onPause() {
        super.onPause();
        Log.d("systemssss"," onPause run SaveFragment ");
    }

    @Override
    public void onStop() {
        super.onStop();
        Log.d("systemssss"," onStop run SaveFragment ");
    }

    BroadcastReceiver appendChatScreenMsgReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            final String id ;
            Bundle bundle = intent.getExtras();
            if(bundle != null){
                if(bundle.getBoolean("reload_SaveFragment")){
                    // public ItemJob(int favorited, String id, String title, String place, String image, String description)
                    id = bundle.getString("id");
                    ItemJob item = new ItemJob(bundle.getInt("favorited"),
                            bundle.getString("id"),
                            bundle.getString("title"),
                            bundle.getString("place"),
                            bundle.getString("image"),
                             null
                    );
                    if(bundle.getInt("favorited") == 1){
                        mAdapterSaveJob.List_Save.add(list_save.size(),item);
                    }else{
                        // xoa cong viec luu
                        try {
                            for (int i = 0 ; i < list_save.size();i++) {
                                if (list_save.get(i).getId().equalsIgnoreCase(id)) {
                                    list_save.remove(i);
                                }
                            }
                        }catch (Throwable e){
                            e.printStackTrace();
                            mPresenterSaveJob.getDataFavorited();
                        }
                    }
                    mAdapterSaveJob.notifyDataSetChanged();

                }
            }
        }
    };
}
