package com.ngocthach.appfindwork.Fragment;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.SpinnerAdapter;
import android.widget.TextView;
import android.widget.Toast;

import com.ngocthach.appfindwork.MainActivity;
import com.ngocthach.appfindwork.Model.ItemJob;
import com.ngocthach.appfindwork.R;
import com.ngocthach.appfindwork.adapter.AdapterFindJob;
import com.ngocthach.appfindwork.adapter.AdapterSearch;
import com.ngocthach.appfindwork.presenter.InSearch;
import com.ngocthach.appfindwork.presenter.PresenterFindJob;
import com.ngocthach.appfindwork.presenter.PresenterSearch;
import com.ngocthach.appfindwork.setOnClickItemListener;
import com.ngocthach.appfindwork.utils.Constants;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class FragmentSearch extends Fragment implements View.OnClickListener, AdapterView.OnItemSelectedListener,InSearch, setOnClickItemListener {
    private Button btn_cancel;
    private EditText edt_search;
    Spinner spinnerCustom;
    ArrayList<String> key_search = new ArrayList<String>();
    PresenterSearch mPresenterSearch;

    private boolean type_search = false;
    private AdapterSearch mAdapterSearch;
    private RecyclerView mRecyclerView;
    public List<ItemJob> list_search;
    private int page_Download =0;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_search, container, false);
        btn_cancel = (Button) view.findViewById(R.id.btn_cancel_search);
        edt_search = (EditText) view.findViewById(R.id.edt_search);
        spinnerCustom= (Spinner) view.findViewById(R.id.spinnerCustom);
        mRecyclerView = (RecyclerView) view.findViewById(R.id.recyclerview_search);

        mPresenterSearch = new PresenterSearch(this);
//        mAdapterFindJob = new AdapterFindJob(this);
        initViews();

        key_search.add("Name job");
        key_search.add("Place");

        CustomSpinnerAdapter customSpinnerAdapter=new CustomSpinnerAdapter(getActivity(), key_search);
        spinnerCustom.setAdapter(customSpinnerAdapter);
        btn_cancel.setOnClickListener(this);
        spinnerCustom.setOnItemSelectedListener(this);

        edt_search.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                if (s.toString().length() > 0) {
                    if(!type_search){
                        mPresenterSearch.getDataSearch(Constants.GET_PLACE_SEARCH + s.toString().trim());
                    }else{
                        mPresenterSearch.getDataSearch(Constants.GET_NAME_SEARCH + s.toString().trim());
                    }
                } else {
                    list_search.clear();
                    mAdapterSearch.notifyDataSetChanged();
                }
            }
        });
    return view;
    }

    private void initViews() {
        list_search = new ArrayList<>();
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getActivity());
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.setNestedScrollingEnabled(false);
        mRecyclerView.setItemAnimator(new DefaultItemAnimator());
        mRecyclerView.setHasFixedSize(true);

        mAdapterSearch = new AdapterSearch(getActivity(), list_search, mRecyclerView, this);
        mRecyclerView.setAdapter(mAdapterSearch);
    }


    @Override
    public void onClick(View view) {
        getActivity().onBackPressed();
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        choose_type(position);
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    private boolean choose_type(int t){

        if(t == 0){
            return type_search = true;
        }else{
            return type_search = false;
        }
    }

    @Override
    public void SuccessSearch(JSONArray response) {
        try {
            if (page_Download > 0) {
                list_search.remove(list_search.size() - 1);
                mAdapterSearch.notifyItemRemoved(list_search.size());
            } else {
                list_search.clear();
                mAdapterSearch.notifyDataSetChanged();
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
                mAdapterSearch.jobList.add(item);
            }

            mRecyclerView.setAdapter(mAdapterSearch);

        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
    @Override
    public void ErrorSearch(int Error) {
    }


    @Override
    public void onItemClick(int position, int i, RecyclerView.ViewHolder v) {
        if (i == 0) {
            mPresenterSearch.post_Favorit(list_search.get(position).getId(), 0);

        } else {
            mPresenterSearch.post_Favorit(list_search.get(position).getId(), 1);
        }
        Intent a = new Intent();
        a.setAction(Constants.ACTION_RELOAD_SAVE_FRAGMENT);
        a.putExtra("reload_SaveFragment", true);
        a.putExtra("favorited", i);
        a.putExtra("id", list_search.get(position).getId());
        a.putExtra("title", list_search.get(position).getTitle());
        a.putExtra("place", list_search.get(position).getPlace());
        a.putExtra("image", list_search.get(position).getImage());
        a.putExtra("description", list_search.get(position).getDescription());
        getActivity().sendBroadcast(a);

    }

    public class CustomSpinnerAdapter extends BaseAdapter implements SpinnerAdapter {
        private final Context activity;
        private ArrayList<String> asr;
        public CustomSpinnerAdapter(Context context, ArrayList<String> asr) {
            this.asr=asr;
            activity = context;
        }
        public int getCount()
        {
            return asr.size();
        }

        public Object getItem(int i)
        {
            return asr.get(i);
        }

        public long getItemId(int i)
        {
            return (long)i;
        }

        @Override
        public View getDropDownView(int position, View convertView, ViewGroup parent) {
            TextView txt = new TextView(getActivity());
            txt.setPadding(16, 16, 16, 16);
            txt.setTextSize(18);
            txt.setGravity(Gravity.CENTER_VERTICAL);
            txt.setText(asr.get(position));
            txt.setTextColor(Color.parseColor("#000000"));
            return  txt;
        }

        public View getView(int i, View view, ViewGroup viewgroup) {
            TextView txt = new TextView(getActivity());
            txt.setGravity(Gravity.CENTER);
            txt.setPadding(16, 16, 16, 16);
            txt.setTextSize(16);
            txt.setCompoundDrawablesWithIntrinsicBounds(0, 0, R.drawable.ic_down, 0);
            txt.setText(asr.get(i));
            txt.setTextColor(Color.parseColor("#000000"));
            return  txt;
        }

    }




}
