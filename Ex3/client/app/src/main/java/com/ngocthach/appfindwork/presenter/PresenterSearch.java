package com.ngocthach.appfindwork.presenter;

import android.util.Log;

import com.ngocthach.appfindwork.utils.Constants;

import org.json.JSONArray;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;


public class PresenterSearch extends getObservable {
    InSearch mInSearch;
    public PresenterSearch(InSearch mInSearch){
        this.mInSearch = mInSearch;
    }
    private CompositeDisposable disposable = new CompositeDisposable();

    public void getDataSearch(String key) {
        disposable.add(getJSONArrayObservabless(key)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableObserver<JSONArray>() {
                    @Override
                    public void onNext(JSONArray response) {
                        mInSearch.SuccessSearch(response);
                    }
                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mInSearch.ErrorSearch(1);

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
                        mInSearch.SuccessSearch(response);
                    }
                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mInSearch.ErrorSearch(1);

                    }
                    @Override
                    public void onComplete() {
//                        Mylog.d("onComplete: ....." );
                    }
                }));
    }
}
