package com.ngocthach.appfindwork;


import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import com.ngocthach.appfindwork.Fragment.FragmentSearch;
import com.ngocthach.appfindwork.Fragment.JobFragment;
import com.ngocthach.appfindwork.Fragment.SaveFragment;

public class MainActivity extends AppCompatActivity{
//        String url ="https://itviec.com/it-jobs/android";
    private BottomNavigationView mBottomNavigationView;
//    private Toolbar toolbar;
    ViewPager viewPager;
    MenuItem prevMenuItem, menuItem;
    TabLayout tabLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        toolbar = (Toolbar) findViewById(R.id.toolbar);
//        setSupportActionBar(toolbar);
//        toolbar.setVisibility(View.GONE);

        viewPager = findViewById(R.id.viewpager);
        mBottomNavigationView = findViewById(R.id.bottom_navigation);
        viewPager.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tabLayout));


        BottomNavigationViewHelper.disableShiftMode(mBottomNavigationView);
        mBottomNavigationView.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.navigation_job:
//                                toolbar.setVisibility(View.GONE);
                                viewPager.setCurrentItem(0);
//                                toolbar.setTitle(getResources().getString(R.string.title_job));

                                break;
                            case R.id.navigation_save:
//                                toolbar.setVisibility(View.VISIBLE);
//                                toolbar.setTitle(getResources().getString(R.string.title_save));
                                viewPager.setCurrentItem(1);

                                break;
                        }
                        return false;
                    }
                });

//        viewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
//            @Override
//            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
//            }
//            @Override
//            public void onPageSelected(int position) {
//                if (prevMenuItem != null) {
//                    prevMenuItem.setChecked(false);
//                } else {
//                    mBottomNavigationView.getMenu().getItem(0).setChecked(false);
//                }
//                mBottomNavigationView.getMenu().getItem(position).setChecked(true);
//                prevMenuItem = mBottomNavigationView.getMenu().getItem(position);
//                menuVisible(position);
//            }
//
//            @Override
//            public void onPageScrollStateChanged(int state) {
//            }
//        });
        setupViewPager(viewPager);
    }
//    public void menuVisible(int postion){
////        check = true;
//        switch (postion) {
//            case 0:
//
//                break;
//            case 1:
//
//                break;
//
//        }
//
//    }


    private void setupViewPager(ViewPager viewPager) {
        ViewPagerAdapter adapter = new ViewPagerAdapter(getSupportFragmentManager());
        adapter.addFragment(JobFragment.newInstance(getResources().getString(R.string.title_job)));
        adapter.addFragment(SaveFragment.newInstance(getResources().getString(R.string.title_save)));
        viewPager.setAdapter(adapter);
        viewPager.setOffscreenPageLimit(1);
    }

//    @Override
//    public boolean onCreateOptionsMenu(Menu menu) {
//        // Inflate the menu; this adds items to the action bar if it is present.
//        getMenuInflater().inflate(R.menu.menu_main, menu);
//        return super.onCreateOptionsMenu(menu);
//    }
//
//
//
//    @Override
//    public boolean onOptionsItemSelected(MenuItem item) {
//        int id = item.getItemId();
//        if(id == R.id.menu_search){
////            toolbar.setVisibility(View.GONE);
//            FragmentSearch fragmentsearch = new FragmentSearch();
//            loadFragment(fragmentsearch);
//
//            Toast.makeText(this, "click search!", Toast.LENGTH_SHORT).show();
//
//        }
//        return super.onOptionsItemSelected(item);
//    }


//    private void loadFragment(Fragment fragment) {
//        // load fragment
//        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
//        transaction.replace(R.id.fragment_job, fragment);
//        transaction.addToBackStack(null);
//        transaction.commit();
//    }


//    @Override
//    public void showtoolbar(int i) {
//        if(i == 1 ) {
//            toolbar.setVisibility(View.VISIBLE);
//        }
//    }

}
