package com.ngocthach.appfindwork.presenter;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Created by William Smith on 5/17/2018.
 */

public interface InSaveJob {

    void SuccessSaveJob(JSONArray response );
    void SuccessdeleteSave(JSONArray response );
    void ErrorSaveJob(int Error);

}
