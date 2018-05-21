package com.ngocthach.appfindwork.presenter;

import android.util.Log;

import com.ngocthach.appfindwork.utils.Constants;

import org.json.JSONArray;
import org.json.JSONException;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

/**
 * Created by William Smith on 5/17/2018.
 */

public class PresenterFindJob extends getObservable {

    InFindJob mInFindJob;

    public PresenterFindJob(InFindJob mInFindJob){
        this.mInFindJob = mInFindJob;
    }

    private CompositeDisposable disposable = new CompositeDisposable();


    public void getDataFindJob() {
        disposable.add(getJSONArrayObservabless(Constants.GET_FIND_JOB)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<JSONArray>() {
                    @Override
                    public void onNext(JSONArray response) {
                        mInFindJob.SuccessFindJob(response);
                    }
                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mInFindJob.ErrorFindJob(1);

                    }
                    @Override
                    public void onComplete() {
//                        Mylog.d("onComplete: ....." );
                    }
                }));
    }


    public void post_Favorit(String id,int i) {
        Log.d(" bbbbbbbbbbbbbb  ", "onNext post : " + Constants.POST_FAVORITED+id + "/"+i);
        disposable.add(postFavoritObservabless(Constants.POST_FAVORITED+id + "/"+i)

                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<JSONArray>() {

                    @Override
                    public void onNext( JSONArray response ) {
                        Log.d(" bbbbbbbbbbbbbb  ", "onNext: " + response);
                        mInFindJob.SuccessFindJob(response);
                    }
                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mInFindJob.ErrorFindJob(1);

                    }
                    @Override
                    public void onComplete() {
//                        Mylog.d("onComplete: ....." );
                    }
                }));
    }

    public void cancelRequest() {
        Log.e("Cancel","Cancel Request");
        disposable.clear();
    }
}
