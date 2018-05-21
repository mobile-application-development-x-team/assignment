package com.ngocthach.appfindwork.presenter;

import org.json.JSONArray;

/**
 * Created by William Smith on 5/17/2018.
 */

public interface InFindJob {

    void SuccessFindJob(JSONArray response);
    void ErrorFindJob(int Error);

}
