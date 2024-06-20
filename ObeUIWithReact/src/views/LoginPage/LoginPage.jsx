import "./LoginPage.css";
import { RiAdminFill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div className="navigation-strip">
        <span>OBE Documentation Platform</span>
        <span id="aboutus">About us</span>
        <span className="about-info">Contact us:</span>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-2 card-component">
        <div className="col desktop">
          <div className="row row-cols-1 row-cols-md-2 g-2 card-component">
            <div className="left-container col">
              <h3 id="h2">Latest News</h3>
              <div class="banner_overflow">
                <li type="none" id="banner">
                  "This is to noted that a new app is going to be available soon
                  to make your life more easier"
                </li>
                <li type="none" id="banner">
                  "This is to noted that a new app is going to be available soon
                  to make your life more easier"
                </li>
              </div>
            </div>

            <div className="left-container col">
              <h3 id="h2">Latest Circulars</h3>
              <div class="banner_overflow">
                <li type="none" id="banner">
                  "Attainment correct info"
                </li>
                <li type="none" id="banner">
                  "This is to noted that a new app is going to be available soon
                  to make your life more easier"
                </li>
              </div>
            </div>
          </div>

          <div className="about-container col">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p id="aboutgap"></p>
                  </td>
                  <td>
                    <p id="about">About Admin</p>
                    <div className="about-info">
                      Additional information about Admin
                    </div>
                  </td>

                  <td>
                    <p id="about">About Teacher</p>
                    <div className="about-info">
                      Additional information about Coordinator
                    </div>
                  </td>
                  <td>
                    <p id="about">About Coordinator</p>
                    <div className="about-info">
                      Additional information about Teacher
                    </div>
                  </td>
                  <td>
                    <p id="aboutgap"></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col">
          <form action="/loginextra" method="POST">
            <div className="form-group ">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        id="admin"
                        type="radio"
                        name="role"
                        value="admin"
                        required
                      />
                      <label id="radiobutton" htmlFor="admin">
                        <RiAdminFill />
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
                      <label id="radiobutton" htmlFor="coordinator">
                        <FaUserShield />
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
                      <label id="radiobutton" htmlFor="teacher">
                        <FaChalkboardTeacher />
                        <p>Teacher</p>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-group">
              <img id="captchaImg" src="/captcha" alt="CAPTCHA" />
              <i
                id="refreshCaptcha"
                className="fa fa-sync-alt"
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

            <div className="form-group text-center">
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to bottom, #764BA2, #667EEA)",
                }}
              >
                Login
              </button>
              <Link to="/register">
                <button
                  type="submit2"
                  style={{
                    background: "linear-gradient(to bottom, #764BA2, #667EEA)",
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
            <div className="form-group text-center">
              <Link to="/forgot-password" className="/forgot-password">
                Forgot Password?
              </Link>
              &nbsp;
            </div>
          </form>
        </div>
      </div>
      <div className="col mobile">
        <div className="row row-cols-1 row-cols-md-2 g-2 card-component">
          <div className="left-container col">
            <h3 id="h2">Latest News</h3>
            <div class="banner_overflow">
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
            </div>
          </div>

          <div className="left-container col">
            <h3 id="h2">Latest Circulars</h3>
            <div class="banner_overflow">
              <li type="none" id="banner">
                "Attainment correct info"
              </li>
              <li type="none" id="banner">
                "This is to noted that a new app is going to be available soon
                to make your life more easier"
              </li>
            </div>
          </div>
        </div>

        <div className="about-container col">
          <table>
            <tbody>
              <tr>
                <td>
                  <p id="aboutgap"></p>
                </td>
                <td>
                  <p id="about">About Admin</p>
                  <div className="about-info">
                    Additional information about Admin
                  </div>
                </td>

                <td>
                  <p id="about">About Teacher</p>
                  <div className="about-info">
                    Additional information about Coordinator
                  </div>
                </td>
                <td>
                  <p id="about">About Coordinator</p>
                  <div className="about-info">
                    Additional information about Teacher
                  </div>
                </td>
                <td>
                  <p id="aboutgap"></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="contact-us-container">
        <div id="contact-us-line">Contact Us</div>
      </div>

      <div className="navigation-strip2">
        <p> Contact Detail:+91 5959595959</p>
      </div>
    </>
  );
};
export default LoginPage;
