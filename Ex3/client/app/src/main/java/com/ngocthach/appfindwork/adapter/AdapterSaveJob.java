package com.ngocthach.appfindwork.adapter;

import android.app.Activity;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.Priority;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.RequestOptions;
import com.ngocthach.appfindwork.Model.ItemJob;
import com.ngocthach.appfindwork.R;
import com.ngocthach.appfindwork.setOnClickItemListener;

import java.util.List;

    public class AdapterSaveJob extends  RecyclerView.Adapter {

        public List<ItemJob> List_Save;
        Context mContext;
        private setOnClickItemListener mSetOnClickItemListener;
        private int visibleThreshold;
        private int lastVisibleItem, totalItemCount;
        private OnLoadMoreListener onLoadMoreListener;
        private boolean loading;
        private final int VIEW_ITEM = 1;
        private final int VIEW_PROG = 0;


        public AdapterSaveJob(Activity activity, List<ItemJob> jobList, RecyclerView mRecyclerView, setOnClickItemListener mSetOnClickItemListener){
            this.List_Save = jobList;
            this.mContext = activity;
            this.mSetOnClickItemListener = mSetOnClickItemListener;
            if(mRecyclerView.getLayoutManager() instanceof LinearLayoutManager){
                final LinearLayoutManager linearLayoutManager = (LinearLayoutManager) mRecyclerView.getLayoutManager();
                mRecyclerView.addOnScrollListener(new RecyclerView.OnScrollListener() {
                    @Override
                    public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
                        super.onScrolled(recyclerView, dx, dy);
                        totalItemCount = linearLayoutManager.getItemCount();
                        visibleThreshold = linearLayoutManager.getChildCount();
                        lastVisibleItem = linearLayoutManager.findLastVisibleItemPosition();
                        if(!loading && totalItemCount <= (lastVisibleItem+ visibleThreshold)){
                            if(onLoadMoreListener != null){
                                onLoadMoreListener.onLoadmore();
                            }
                            loading = true;
                        }
                    }
                });
            }
        }


        @NonNull
        @Override
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            RecyclerView.ViewHolder vh;
            if(viewType == VIEW_ITEM){
                View v = LayoutInflater.from(parent.getContext())
                        .inflate(R.layout.item_job, parent, false);
                vh = new AdapterSaveJob.MyHolder(v);
            }else {
                View v = LayoutInflater.from(parent.getContext())
                        .inflate(R.layout.progress_more, parent, false);
                vh = new AdapterSaveJob.ProgressViewHolder(v);
            }
            return vh;
        }

        @Override
        public void onBindViewHolder(final RecyclerView.ViewHolder viewHolder, final int position) {
            final ItemJob item_save = List_Save.get(position);
            if(viewHolder instanceof MyHolder) {
                ((MyHolder) viewHolder).txt_title.setText(item_save.getTitle());
                ((MyHolder) viewHolder).txt_place.setText(item_save.getPlace());

                ((MyHolder) viewHolder).setImg_job(item_save.getImage());
                ((MyHolder) viewHolder).setImg_favorit(item_save.getFavorited());


                ((MyHolder) viewHolder).img_save.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        if(item_save.getFavorited() == 1){

                            mSetOnClickItemListener.onItemClick(position,0,viewHolder);

                        }else{

                            mSetOnClickItemListener.onItemClick(position,1,viewHolder);

                        }
                    }
                });




            } else {

                if(List_Save.size() >=10) {
                    ((ProgressViewHolder) viewHolder).progressBar.setVisibility(View.VISIBLE);
                    ((ProgressViewHolder) viewHolder).progressBar.setIndeterminate(true);
                }
                else{
                    ((ProgressViewHolder) viewHolder).progressBar.setIndeterminate(false);
                    ((ProgressViewHolder) viewHolder).progressBar.setVisibility(View.GONE);
                }
            }

        }

        @Override
        public int getItemViewType(int position) {
            return List_Save.get(position) != null ? VIEW_ITEM : VIEW_PROG;
        }

        @Override
        public int getItemCount() {
            return List_Save.size();
        }

        public  class ProgressViewHolder extends RecyclerView.ViewHolder {
            public ProgressBar progressBar;

            public ProgressViewHolder(View v) {
                super(v);
                progressBar = (ProgressBar) v.findViewById(R.id.progress_more) ;
            }
        }

        public class MyHolder extends RecyclerView.ViewHolder {
            TextView txt_title, txt_place;
            ImageView img_save, img_job;

            public MyHolder(View rowView) {
                super(rowView);

                txt_title = (TextView) rowView.findViewById(R.id.txt_title);
                txt_place = (TextView) rowView.findViewById(R.id.txt_place);

                img_job = (ImageView) rowView.findViewById(R.id.image_job);
                img_save = (ImageView) rowView.findViewById(R.id.image_save);

            }

            private void setImg_favorit(int i){
                if(i == 1){
                    img_save.setImageResource(R.drawable.ic_saved);
                }else{
                    img_save.setImageResource(R.drawable.ic_notsave);
                }

            }

            private void setImg_job(String image) {
                RequestOptions options = new RequestOptions()
                        .centerCrop()
                        .dontAnimate()
                        .placeholder(R.drawable.search)
                        .error(R.drawable.broken_image)
                        .diskCacheStrategy(DiskCacheStrategy.AUTOMATIC)
                        .priority(Priority.NORMAL);
                Glide.with(mContext)
                        .load(image)
                        .apply(options)
                        .into(img_job);
            }
        }


        public interface OnLoadMoreListener{
            void onLoadmore();
        }

        public void setOnLoadMoreListener(OnLoadMoreListener listener){
            this.onLoadMoreListener = listener;
        }
    }

