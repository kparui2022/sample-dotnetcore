<template>
    <div class="tab-outr small four w-auto">
        <TabWrapper>
            <Tabs title="Comments">
                <div class="share-otr">
                    <div class="share-input-innr">
                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                    </div>
                    <input type="submit" class="btn solid orange-btn" value="Send" />
                </div>
                <div class="checkbox-inn">
                    <label class="checkbox-input"> Spoiler
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="user-review-box">
                    <ul class="outr-list">
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    <figure class="us-img"><img src="@/assets/images/user-pic.jpg" alt=""/></figure>
                                    <ul class="review-list">
                                        <li><a href="#">
                                            <img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/>
                                        </a></li>
                                        <li><a href="#">
                                            <img src="@/assets/icons/list-icon2.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/like-icon-blk2.svg" class="light-th" alt=""/> 0
                                        </a></li>

                                        <li><a href="#">
                                            <img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/>
                                            Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <a href="javascript:void(0);" class="spoiler-btn" :class="{ show: active }" @click="active = !active" :aria-pressed="active ? 'true' : 'false'"> 
                                        <em class="reveal">Reveal Spoiler </em>
                                        <em class="hide">Hide Spoiler </em>
                                        <span class="down-arrow"><img src="@/assets/icons/down-arrow-blue.svg" alt=""/></span>
                                        <span class="up-arrow"><img src="@/assets/icons/up-arrow-blue.svg" alt=""/></span>
                                    </a>
                                    <div class="spoiler-box" :class="{ show: active }">
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    </div>
                                    <ul class="review-list mt-16-in">
                                        <li><a href="#"><img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/></a></li>
                                        <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 2</a></li>
                                        <li><a href="#"><img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/> Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <a href="javascript:void(0);" class="spoiler-btn" :class="{ show: active2 }" @click="active2 = !active2" :aria-pressed="active ? 'true' : 'false'">
                                        <em class="reveal">Reveal Spoiler </em>
                                        <em class="hide">Hide Spoiler </em>
                                        <span class="down-arrow"><img src="@/assets/icons/down-arrow-blue.svg" alt=""/></span>
                                        <span class="up-arrow"><img src="@/assets/icons/up-arrow-blue.svg" alt=""/></span>
                                    </a>
                                    <div class="spoiler-box" :class="{ show: active2 }">
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    </div>
                                    <ul class="review-list mt-16-in">
                                        <li><a href="#"><img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/></a></li>
                                        <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 2</a></li>
                                        <li><a href="#"><img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/> Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    <ul class="review-list mt-16-in">
                                        <li><a href="#"><img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/></a></li>
                                        <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 2</a></li>
                                        <li><a href="#"><img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/> Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right-align-list">
                                <ul class="review-innr-list">
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="share-otr">
                                    <div class="share-input-innr">
                                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                    </div>
                                    <input type="submit" class="btn solid orange-btn" value="Send" />
                                </div>
                                <div class="checkbox-inn">
                                    <label class="checkbox-input"> Spoiler
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    <ul class="review-list mt-16-in">
                                        <li><a href="#"><img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/></a></li>
                                        <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 2</a></li>
                                        <li><a href="#"><img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/> Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right-align-list">
                                <ul class="review-innr-list">
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="share-otr">
                                    <div class="share-input-innr">
                                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                    </div>
                                    <input type="submit" class="btn solid orange-btn" value="Send" />
                                </div>
                                <div class="checkbox-inn">
                                    <label class="checkbox-input"> Spoiler
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon">
                                    <figure>
                                        <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                        <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                    </figure>
                                </div>
                                <div class="user-review-txt">
                                    <div class="user-review-top">
                                        <h4>User name</h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    <ul class="review-list mt-16-in">
                                        <li><a href="#"><img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                            <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/></a></li>
                                        <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 2</a></li>
                                        <li><a href="#"><img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                            <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/> Reply</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right-align-list">
                                <ul class="review-innr-list">
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="share-otr">
                                    <div class="share-input-innr">
                                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                    </div>
                                    <input type="submit" class="btn solid orange-btn" value="Send" />
                                </div>
                                <div class="checkbox-inn">
                                    <label class="checkbox-input"> Spoiler
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tabs>
            <Tabs title="Trivia">
                <p>tab2</p>
            </Tabs>
            <Tabs title="Famous Lines">
                <div class="share-otr">
                    <div class="share-input-innr">
                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                    </div>
                    <input type="submit" class="btn solid orange-btn" value="Send" />
                </div>
                <div class="cast-dropdown">
                    <a href="javascript:void(0)" class="cast-toggle"  :class="{ dropdownshow: active3 }" @click="active3 = !active3" :aria-pressed="active3 ? 'true' : 'false'">Cast (Filmography)</a>
                    <ul class="cast-menu" :class="{ dropdownshow: active3 }">
                        <li><a href="#">Avengers: Endgame</a></li>
                        <li class="active"><a href="#">The Tiger Who Came to Tea</a></li>
                        <li><a href="#">Good Omens</a></li>
                        <li><a href="#">Between Two Ferns: The Movie</a></li>
                        <li><a href="#">1917</a></li>
                        <li><a href="#">Avengers: Endgame</a></li>
                        <li><a href="#">The Tiger Who Came to Tea</a></li>
                        <li><a href="#">Good Omens</a></li>
                        <li><a href="#">Between Two Ferns: The Movie</a></li>
                        <li><a href="#">1917</a></li>
                    </ul>
                </div>
                <div class="user-review-box fm-line">
                    <ul class="outr-list">
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon line-img">
                                    <span><img src="@/assets/images/i1.jpg" alt=""/></span>
                                </div>
                                <div class="user-review-txt line-txt">
                                    <div class="user-review-top">
                                        <h4>Stephen Strange / Doctor Strange <span>Spider-Man: No Way Home</span></h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                    <div class="community-btm-otr">
                                        <div class="community-btm-img">
                                            <span><img src="@/assets/images/thumb1.png" alt=""/></span>
                                            <h6>Julia</h6>
                                        </div>
                                        <ul class="review-list">
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/>
                                            </a></li>
                                            <li><a href="#" class="like"><img src="@/assets/icons/like-icon-red.svg" alt=""/> 10</a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/>
                                                Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon line-img">
                                    <span><img src="@/assets/images/i2.jpg" alt=""/></span>
                                </div>
                                <div class="user-review-txt line-txt">
                                    <div class="user-review-top">
                                        <h4>Dominic Cummings <span>Dominic Cummings</span></h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text  </p>
                                    <div class="community-btm-otr">
                                        <div class="community-btm-img">
                                            <span><img src="@/assets/images/thumb2.png" alt=""/></span>
                                            <h6>1231234</h6>
                                        </div>
                                        <ul class="review-list">
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon2.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/like-icon-blk2.svg" class="light-th" alt=""/> 
                                                2</a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/>
                                                Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon line-img">
                                    <span><img src="@/assets/images/slider-pic2.jpg" alt=""/></span>
                                </div>
                                <div class="user-review-txt line-txt">
                                    <div class="user-review-top">
                                        <h4>Stephen Strange / Doctor Strange <span>Avengers: Endgame</span></h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text </p>
                                    <div class="community-btm-otr">
                                        <div class="community-btm-img">
                                            <span><img src="@/assets/images/thumb1.png" alt=""/></span>
                                            <h6>Julia</h6>
                                        </div>
                                        <ul class="review-list">
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon2.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/like-icon-blk2.svg" class="light-th" alt=""/> 
                                                1</a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/>
                                                Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="right-align-list">
                                <ul class="review-innr-list">
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="share-otr">
                                    <div class="share-input-innr">
                                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                    </div>
                                    <input type="submit" class="btn solid orange-btn" value="Send" />
                                </div>
                                <div class="checkbox-inn">
                                    <label class="checkbox-input"> Spoiler
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-comment-list">
                                <div class="user-review-icon line-img">
                                    <span><img src="@/assets/images/slider-pic2.jpg" alt=""/></span>
                                </div>
                                <div class="user-review-txt line-txt">
                                    <div class="user-review-top">
                                        <h4>Stephen Strange / Doctor Strange <span>Avengers: Endgame</span></h4>
                                        <ul>
                                            <li>June 10. 2021 </li>
                                            <li>11:00</li>
                                        </ul>
                                    </div>
                                    <p>Article text  Article text Article text Article text Article text Article text Article text </p>
                                    <div class="community-btm-otr">
                                        <div class="community-btm-img">
                                            <span><img src="@/assets/images/thumb1.png" alt=""/></span>
                                            <h6>Julia</h6>
                                        </div>
                                        <ul class="review-list">
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon1.svg" class="dark-th" alt=""/>
                                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt=""/>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon2.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/like-icon-blk2.svg" class="light-th" alt=""/> 
                                                1</a></li>
                                            <li><a href="#">
                                                <img src="@/assets/icons/list-icon3.svg" class="dark-th" alt=""/> 
                                                <img src="@/assets/icons/chat-icon-blk.svg" class="light-th" alt=""/>
                                                Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="right-align-list">
                                <ul class="review-innr-list">
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="user-comment-list">
                                            <div class="user-review-icon">
                                                <figure>
                                                    <img src="@/assets/icons/user-icon.svg" alt="" class="dark-th"/>
                                                    <img src="@/assets/icons/user-icon-gray.svg" alt=""  class="light-th"/>
                                                </figure>
                                            </div>
                                            <div class="user-review-txt">
                                                <div class="user-review-top">
                                                    <h4>User name</h4>
                                                    <ul>
                                                        <li>June 10. 2021 </li>
                                                        <li>11:00</li>
                                                    </ul>
                                                </div>
                                                <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="share-otr">
                                    <div class="share-input-innr">
                                        <input type="text" class="form-control" placeholder="Share what’s new..." />
                                        <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                    </div>
                                    <input type="submit" class="btn solid orange-btn" value="Send" />
                                </div>
                                <div class="checkbox-inn">
                                    <label class="checkbox-input"> Spoiler
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tabs>
            <Tabs title="Goofs">
                <p>tab4</p>
            </Tabs>
        </TabWrapper>
    </div>
</template>


<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";

export default {
    name: 'CommunityCard',
    components: {
    Tabs,
    TabWrapper,
},
data() {
    return {
      active: false,
      active2: false,
      active3: false
    };
  }
}
</script>