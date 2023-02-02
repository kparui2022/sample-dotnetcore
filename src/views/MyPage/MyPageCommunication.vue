<template>
    <section class="mypage-sec">
        <div class="container">
            <div class="mypage-wrapper">
                <LeftSidePanel />
                <div class="mypage-rght">
                    <h2>Communications</h2>
                    <div class="tab-outr full-wd four">
                        <TabWrapper>
                            <Tabs title="Commnets (6)">
                                <ul class="comm-list">
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image1.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">The Lord of the Rings: The Return of the King</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 2</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image2.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">The Dark Knight</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image3.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Life Is Beautiful</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 4</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image4.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Whiplash</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text </p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image5.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Back to the Future</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 4</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image6.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">The Shawshank Redemption</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 3</span>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                            <Tabs title="Trivia (6)">
                               <ul class="comm-list">
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image7.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">The Northman</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 2</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image8.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Valley of the Dead</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image9.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Resident Evil</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 4</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image10.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Ms. Marvel</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Artic... </p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image11.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Moon Knight</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 0</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image12.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Extraordinary Attorney Woo</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text Artic... </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                            <Tabs title="Famous Line (6)">
                                <ul class="comm-list">
                                    <li>
                                        <CommunicationCardTwo />
                                    </li>
                                    <li>
                                        <CommunicationCardTwo />
                                    </li>
                                    <li>
                                        <CommunicationCardFour />
                                    </li>
                                    <li>
                                        <CommunicationCardFour />
                                    </li>
                                    <li>
                                        <CommunicationCardFour />
                                    </li>
                                    <li>
                                        <CommunicationCardTwo />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image13.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Woo Young-woo <span>Extraordinary Attorney Woo</span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <h5>replied to <span>Username</span></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image14.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Kang Tae-oh <span>Extraordinary Attorney Woo</span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <h5>replied to <span>Username</span></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image15.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Jane “Eleven” Hopper <span>Stranger Things</span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image16.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Bruce Wayne / Batman <span>The Dark Knight</span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image17.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Claire Dearing <span>Jurassic World Dominion </span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/awd2.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Wanda Maximoff / The Scarlet Witch <span>Doctor Strange in the Multiverse of Madness </span></a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <h5>replied to <span>Username</span></h5>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                            <Tabs title="Goofs (6)">
                                <ul class="comm-list">
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardOne />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <li>
                                        <CommunicationCardThree />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image19.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Doctor Strange in the Multiverse of Madness</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 2</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image20.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Avengers: Endgame</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image21.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">The Hobbit: The Battle of the Five Armies</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 4</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image22.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Uncharted</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text</p>
                                            <h5>replied to <span>Username</span></h5>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 0</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image5.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Back to the Future</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image23.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Avatar</a></h4>
                                                <div class="right">
                                                    <div class="date">
                                                        <span>June 10. 2021 </span>
                                                        <span>10:05</span>
                                                    </div>
                                                    <a href="#" class="delete pt-0">
                                                        <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                                                        <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                            <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 3</span>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                        </TabWrapper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import LeftSidePanel from "@/components/MyPage/LeftSidePanel.vue";
import CommunicationCardOne from "@/components/MyPage/CommunicationCardOne.vue";
import CommunicationCardTwo from "@/components/MyPage/CommunicationCardTwo.vue";
import CommunicationCardThree from "@/components/MyPage/CommunicationCardThree.vue";
import CommunicationCardFour from "@/components/MyPage/CommunicationCardFour.vue";

export default {
  name: 'MyPageCommunication',  
  components: {
    Tabs,
    TabWrapper,
    LeftSidePanel,
    CommunicationCardOne,
    CommunicationCardTwo,
    CommunicationCardThree,
    CommunicationCardFour
}
};
</script>
