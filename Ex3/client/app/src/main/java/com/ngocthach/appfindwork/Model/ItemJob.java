package com.ngocthach.appfindwork.Model;

/**
 * Created by William Smith on 5/17/2018.
 */

public class ItemJob {
    public void setFavorited(int favorited) {
        this.favorited = favorited;
    }

    int favorited;
    String id ;
    String title;
    String place;
    String Image;

    public ItemJob() {
    }

    public int getFavorited() {
        return favorited;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPlace() {
        return place;
    }

    public String getImage() {
        return Image;
    }

    public String getDescription() {
        return description;
    }

    String description;

    public ItemJob(int favorited, String id, String title, String place, String image, String description) {
        this.favorited = favorited;
        this.id = id;
        this.title = title;
        this.place = place;
        Image = image;
        this.description = description;
    }
}
