#assigment

    Fashion Shop Online (version 1.0.0: only Female)

#infomation

    x-team

    members:

        Châu Ngọc Thạch     51303740


        Võ Xuân Thuận       51304012

#technology

    - Nodejs


    - MongoDB


    - React Native


# app structure

    -- asignment

        -- client

            -- app

                -- app.android.js

                -- app.ios.js

                -- ...

                -- src

                    -- components

                        -- App.js

                        -- Authentication

                            -- Authentication.js

                        --ChangeInfo

                            -- ChangeInfo.js

                        -- OrderHistory

                            -- OrderHistory.js

                        -- Main

                            -- Main.js


                            -- Menu.js

                            -- routes.js

                            -- Shop

                                -- Cart


                                    -- ...


                                -- Contact


                                    -- ...

                                -- Home

                                    -- ...

                                -- Search

                                    -- ...

                                -- ListProduct

                                    -- ...

                                -- ProductDetail

                                    -- ...

                    -- configIP

                    -- media

        -- server

            -- index.js

            -- api

                -- models

                    -- UserModel.js

                    -- BillModel.js

                    -- ProductTypeModel.js

                    -- ProductModel.js

                -- constrollers

                    -- UserController.js

                    -- BillController.js

                    -- ProductTypeController.js

                    -- ProductController.js

                -- routes

                    -- UserRoute.js

                    -- BillRoute.js

                    -- ProductTypeRoute.js

                    -- ProductRoute.js

# run project

-- config IP

    ++ run: ipconfig (windows)  or ifconfig (unix) to check your IP (example: 192.168.3.24)

    ++ open file: ~/config.js and update URL

-- starting server

    ++ cd ~/index.js and run: node index.js


-- starting app

    ++ cd ~/app and run: 

        --- npm run android (run app on android device)

        --- npm run ios  (run and on ios device)



