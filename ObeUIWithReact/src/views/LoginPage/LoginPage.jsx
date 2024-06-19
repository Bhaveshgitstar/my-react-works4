import "./LoginPage.css";
const LoginPage = () => {
  return (
    <>
      <div class="navigation-strip">
        <h2>
          &nbsp;&nbsp;OBE Documentation Platform
          <a id="aboutus" class="home-button">
            About us
          </a>
          <div class="about-info">Contact us:</div>
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-2 card-component">
        <div className="col desktop">
          <div class="row row-cols-1 row-cols-md-2 g-2 card-component">
            <div className="left-container col">
              <h3 id="h2">Latest News</h3>
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
            </div>

            <div class="left-container col">
              <h3 id="h2">Latest Circulars</h3>
              <li type="none" id="banner">
                "Attainment correct info"
              </li>
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
            </div>
          </div>

          <div class="about-container col">
            <table>
              <tr>
                <td>
                  <p id="aboutgap"></p>
                </td>
                <td>
                  <p id="about">About Admin</p>
                  <div class="about-info">
                    Additional information about Admin
                  </div>
                </td>

                <td>
                  <p id="about">About Teacher</p>
                  <div class="about-info">
                    Additional information about Coordinator
                  </div>
                </td>
                <td>
                  <p id="about">About Coordinator</p>
                  <div class="about-info">
                    Additional information about Teacher
                  </div>
                </td>
                <td>
                  <p id="aboutgap"></p>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="col">
          <form action="/loginextra" method="POST">
            <div class="form-group ">
              <table>
                <tr>
                  <td>
                    <input
                      id="admin"
                      type="radio"
                      name="role"
                      value="admin"
                      required
                    />
                    <label id="radiobutton" for="admin">
                      <i class="fa fa-user-shield"></i>
                      <p>Admin</p>
                    </label>
                  </td>
                  <td>
                    <input
                      id="coordinator"
                      type="radio"
                      name="role"
                      value="coordinator"
                      checked="checked"
                      required
                    />
                    <label id="radiobutton" for="coordinator">
                      <i class="fa fa-user-tie"></i>
                      <p>Coordinator</p>
                    </label>
                  </td>
                  <td>
                    <input
                      id="teacher"
                      type="radio"
                      name="role"
                      value="teacher"
                      required
                    />
                    <label id="radiobutton" for="teacher">
                      <i class="fa fa-chalkboard-teacher"></i>
                      <p>Teacher</p>
                    </label>
                  </td>
                </tr>
              </table>
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div class="form-group">
              <img id="captchaImg" src="/captcha" alt="CAPTCHA" />
              <i
                id="refreshCaptcha"
                class="fa fa-sync-alt"
                style={{ cursor: "pointer" }}
              ></i>
              <br></br>
              <input
                type="text"
                id="captchaInput"
                placeholder="Enter Captcha"
                name="captchaInput"
                required
              />
            </div>

            <div class="form-group text-center">
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to bottom, #764BA2, #667EEA)",
                }}
              >
                Login
              </button>
              <button
                onclick="run()"
                type="submit2"
                style={{
                  background: "linear-gradient(to bottom, #764BA2, #667EEA)",
                }}
              >
                Register
              </button>
            </div>
            <div class="form-group text-center">
              <a href="/forgot-password" class="/forgot-password">
                Forgot Password?
              </a>{" "}
              &nbsp;
            </div>
          </form>
        </div>
      </div>
      <div className="col mobile">
        <div class="row row-cols-1 row-cols-md-2 g-2 card-component">
          <div className="left-container col">
            <h3 id="h2">Latest News</h3>
            <li type="none" id="banner">
              "This is to noted that a new app is going to be available soon to
              make your life more easier"
            </li>
            <li type="none" id="banner">
              "This is to noted that a new app is going to be available soon to
              make your life more easier"
            </li>
          </div>

          <div class="left-container col">
            <h3 id="h2">Latest Circulars</h3>
            <li type="none" id="banner">
              "Attainment correct info"
            </li>
            <li type="none" id="banner">
              "This is to noted that a new app is going to be available soon to
              make your life more easier"
            </li>
          </div>
        </div>

        <div class="about-container col">
          <table>
            <tr>
              <td>
                <p id="aboutgap"></p>
              </td>
              <td>
                <p id="about">About Admin</p>
                <div class="about-info">Additional information about Admin</div>
              </td>

              <td>
                <p id="about">About Teacher</p>
                <div class="about-info">
                  Additional information about Coordinator
                </div>
              </td>
              <td>
                <p id="about">About Coordinator</p>
                <div class="about-info">
                  Additional information about Teacher
                </div>
              </td>
              <td>
                <p id="aboutgap"></p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="contact-us-container">
        <div id="contact-us-line">Contact Us</div>
      </div>

      <div class="navigation-strip2">
        <p> Contact Detail:+91 5959595959</p>
      </div>
    </>
  );
};
export default LoginPage;
