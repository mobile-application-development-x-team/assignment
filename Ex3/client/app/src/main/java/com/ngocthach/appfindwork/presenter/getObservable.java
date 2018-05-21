package com.ngocthach.appfindwork.presenter;


import android.util.Log;

import com.androidnetworking.interfaces.AnalyticsListener;
import com.rx2androidnetworking.Rx2AndroidNetworking;

import org.json.JSONArray;
import org.json.JSONObject;

import io.reactivex.Observable;

public class getObservable {

final String TAG = "getObservable";
    JSONObject jsonObject = new JSONObject();

    public Observable<JSONArray> getJSONArrayObserSearch(String link) {
        return Rx2AndroidNetworking.get(link)
                .build()
                .setAnalyticsListener (new AnalyticsListener() {
                    @Override
                    public void onReceived(long timeTakenInMillis, long bytesSent, long bytesReceived, boolean isFromCache) {
                        Log.d(TAG, " timeTakenInMillis : " + timeTakenInMillis);
                        Log.d(TAG, " bytesSent : " + bytesSent);
                        Log.d(TAG, " bytesReceived : " + bytesReceived);
                        Log.d(TAG, " isFromCache : " + isFromCache);
                    }
                }).getJSONArrayObservable();
    }

    public Observable<JSONArray> getJSONArrayObservabless(String link) {
        return Rx2AndroidNetworking.get(link)
                .build()
                .setAnalyticsListener (new AnalyticsListener() {
                    @Override
                    public void onReceived(long timeTakenInMillis, long bytesSent, long bytesReceived, boolean isFromCache) {
                        Log.d(TAG, " timeTakenInMillis : " + timeTakenInMillis);
                        Log.d(TAG, " bytesSent : " + bytesSent);
                        Log.d(TAG, " bytesReceived : " + bytesReceived);
                        Log.d(TAG, " isFromCache : " + isFromCache);
                    }
                }).getJSONArrayObservable();
    }


    public Observable<JSONArray> postFavoritObservabless(String link) {
        return Rx2AndroidNetworking.post(link)
                .build()
                .setAnalyticsListener (new AnalyticsListener() {
                    @Override
                    public void onReceived(long timeTakenInMillis, long bytesSent, long bytesReceived, boolean isFromCache) {
                        Log.d(TAG, " timeTakenInMillis : " + timeTakenInMillis);
                        Log.d(TAG, " bytesSent : " + bytesSent);
                        Log.d(TAG, " bytesReceived : " + bytesReceived);
                        Log.d(TAG, " isFromCache : " + isFromCache);
                    }
                }).getJSONArrayObservable();

    }


}
