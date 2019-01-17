<script data-exec-on-popstate>
  // set view variables
  view.layoutClass = 'layout--standard';
  view.currentPage = 'contact';



  // $(document).on('submit', 'js-pjax-form', function(event) {
  //   console.log('form-submit');
  //   event.preventDefault();
  //   pjaxForm(event);
  // });
</script>


<div class="page-contact js-post-container">
  <div class="center center--640">




    <div class="module module--white">
      <div class="module__body">



        <form class="form-style js-pjax-form" action="index.php?pageID=sent" method="post" id="contact-form">
          <!-- form heading -->
          <div class="form-style__heading">
            <h4 class="heading-style">Get in touch!</h4>
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
                    <label class="form-brick__label">Email address</label>
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
                <div class="form-brick">
                  <label class="form-brick__label">Subject title</label>
                  <div class="form-brick__element">
                    <input type="text" class="input-style">
                  </div>
                  <div class="form-brick__validation">
                    This is an error message, get the fuck out.
                  </div>
                </div>
              </div>
              <div class="form-grid__row">
                <div class="form-brick form-brick--last">
                  <label class="form-brick__label">Message</label>
                  <div class="form-brick__element">
                    <textarea type="text" class="textarea-style"></textarea>
                  </div>
                  <div class="form-brick__validation">
                    This is an error message, get the fuck out.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-style__footer">
            <button class="button button--48 button--blue" type="submit" form="contact-form">Send</button>
          </div>




        </form>
      </div>
    </div>

  </div>
</div>
