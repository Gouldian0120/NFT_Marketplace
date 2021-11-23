<template>
  <!-- Big White Footer -->
  <footer class="footer footer-blue footer-big">
    <div class="container">
      <div class="content">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
          >
            <h5>About Us</h5>
            <ul class="links-vertical">
              <li>
                <a href="#pablo"> Blog </a>
              </li>
              <li>
                <a href="#pablo"> About Us </a>
              </li>
              <li>
                <a href="#pablo"> Presentation </a>
              </li>
              <li>
                <a href="#pablo"> Contact Us </a>
              </li>
            </ul>
          </div>
          <div
            class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
          >
            <h5>Market</h5>
            <ul class="links-vertical">
              <li>
                <a href="#pablo"> Sales FAQ </a>
              </li>
              <li>
                <a href="#pablo"> How to Register </a>
              </li>
              <li>
                <a href="#pablo"> Sell Goods </a>
              </li>
              <li>
                <a href="#pablo"> Receive Payment </a>
              </li>
              <li>
                <a href="#pablo"> Transactions Issues </a>
              </li>
              <li>
                <a href="#pablo"> Affiliates Program </a>
              </li>
            </ul>
          </div>

          <div class="md-layout-item md-medium-size-33 md-small-size-100">
            <h5>Social Feed</h5>
            <div class="social-feed">
              <div class="feed-line">
                <i class="fab fa-twitter" />
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div class="feed-line">
                <i class="fab fa-instagram" />
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div class="feed-line">
                <i class="fab fa-facebook-square" />
                <p>
                  A collection of 25 stunning sites that you can use for
                  inspiration.
                </p>
              </div>
            </div>
          </div>

          <div class="md-layout-item md-medium-size-33 md-small-size-100">
            <h5>Follow Us</h5>
            <ul class="social-buttons">
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook-square" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fab fa-instagram" />
                </md-button>
              </li>
            </ul>

            <h5>Numbers Don't Lie</h5>
            <h4>14.521 <small>Freelancers</small></h4>
            <h4>1.423.183 <small>Transactions</small></h4>
          </div>
        </div>
      </div>

      <hr />

      <div class="copyright">
        Copyright © {{ year }} Codelight All Rights Reserved.
      </div>
    </div>
  </footer>
  <!-- end Big White Footer -->
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
