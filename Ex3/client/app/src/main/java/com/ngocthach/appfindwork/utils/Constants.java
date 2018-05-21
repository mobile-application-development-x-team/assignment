package com.ngocthach.appfindwork.utils;

/**
 * Created by William Smith on 5/17/2018.
 */

public class Constants {
    // http://192.168.3.24:3003/jobs chay server local thay dổi địa chỉ ở đây
    public static final String BASE_URL = "http://192.168.3.24:3003";

    public static final String GET_FIND_JOB =BASE_URL+ "/jobs";
    public static final String GET_FAVORED_JOB =BASE_URL+ "/jobs/favorited-jobs";
///          favorited-job
    public static final String POST_FAVORITED =BASE_URL+ "/jobs/favorited-job/";
//        app.get(urlBase + '/search/place/:key', jobController.getListJobByPlace);
//    app.get(urlBase + '/search/sub-title/:key', jobController.getListJobBySubKeyTitle);
    public static final String GET_PLACE_SEARCH =BASE_URL+ "/jobs/search/place/";
    public static final String GET_NAME_SEARCH =BASE_URL+ "/jobs/search/sub-title/";

    public static final String ACTION_RELOAD_JOB_FRAGMENT = "com.ngocthach.appfindwork.action.RELOAD_JOBFRAGMENT";
    public static final String ACTION_RELOAD_SAVE_FRAGMENT = "com.ngocthach.appfindwork.action.RELOAD_SAVEFRAGMENT";
}
