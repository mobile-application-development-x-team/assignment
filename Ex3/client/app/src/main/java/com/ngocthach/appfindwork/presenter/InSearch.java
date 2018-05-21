package com.ngocthach.appfindwork.presenter;

import org.json.JSONArray;

/**
 * Created by William Smith on 5/21/2018.
 */

public interface InSearch {
    void SuccessSearch(JSONArray response);
    void ErrorSearch(int Error);
}
