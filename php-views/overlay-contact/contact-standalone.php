<?php
  if (isset($_GET['postID'])) {
    $postID = $_GET['postID'];

    //find post data based on ID
    $galleryArray = $_SESSION['gallery'];
    $findPost = array_search($postID, array_column($galleryArray, 'id'));
    $post = $galleryArray[$findPost];

    // content
    $postTitle = $post['title'];
    $postSubtitle = $post['subtitle'];
    $postDescription = $post['desc'];
    $postProject = $post['project'];
    $postTags = $post['tags'];
    $postImage = $post['image'];
    $postColor = "style=background-color:".$post['color'];

  } else {
     $postTitle = 'POST NOT FOUND';
  }
?>

<div class="post post--standalone">
  <div class="center center--800">
    <div class="module module--white module--margin">

      <div class="module__body">
        <form class="form-style">
          <!-- form heading -->
          <div class="form-style__heading">
            <h4 class="heading-style">Billing information</h4>
          </div>
          <div class="form-style__content">


            <div class="form-grid">
              <div class="form-grid__row">
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">Name</label>
                    <div class="form-brick__element">
                      <input type="text" class="input-style">
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">Address</label>
                    <div class="form-brick__element">
                      <input type="text" class="input-style">
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-grid__row">
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">City</label>
                    <div class="form-brick__element">
                      <input type="text" class="input-style">
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">State / Province (optional)</label>
                    <div class="form-brick__element">
                      <input type="text" class="input-style">
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-grid__row">
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">ZIP / Postal code</label>
                    <div class="form-brick__element">
                      <input type="text" class="input-style">
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
                <div class="form-grid__item">
                  <div class="form-brick">
                    <label class="form-brick__label">Country</label>
                    <div class="form-brick__element">
                      <div class="select-box">
                        <div class="select-box__icon">
                          <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                        </div>
                        <div class="select-box__select">
                          <select type="text" class="select-style">
                            <option>-- Select a country --</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-brick__validation">
                      This is an error message, get the fuck out.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-style__heading">
            <h4 class="heading-style">Payment details</h4>
          </div>
          <div class="form-style__content">
            <div class="form-credit">
              <div class="form-credit__number">
                <div class="form-brick">
                  <label class="form-brick__label">Card number</label>
                  <div class="form-brick__element">
                    <input type="text" class="input-style">
                  </div>
                  <div class="form-brick__validation">
                    This is an error message, get the fuck out.
                  </div>
                </div>
              </div>
              <div class="form-credit__expiry">
                <div class="credit-expiry clearfix">
                  <label class="credit-expiry__label">Expiration (MM/YYYY)</label>
                  <div class="credit-expiry__month">
                    <div class="select-box">
                      <div class="select-box__icon">
                        <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                      </div>
                      <div class="select-box__select">
                        <select type="text" class="select-style">
                          <option>MM</option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="credit-expiry__year">
                    <div class="select-box">
                      <div class="select-box__icon">
                        <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                      </div>
                      <div class="select-box__select">
                        <select type="text" class="select-style">
                          <option>YYYY</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-credit__ccv">

                <div class="form-brick">
                  <label class="form-brick__label">CCV</label>
                  <div class="form-brick__element">
                    <input type="text" class="input-style">
                  </div>
                  <div class="form-brick__validation">
                    This is an error message, get the fuck out.
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="form-style__footer">
            <div class="credit-submit">
              <a class="button button--40 button--green" href="account--billing--final.html">$9 - Get Shnappy</a>
            </div>
          </div>

        </form>



      </div>



    </div>

  </div>
</div>
