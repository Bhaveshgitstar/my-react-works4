const Course = () => {
  return (
    <>
      <div class="container mt-5"></div>
      <center>
        <div class="box-heading1" style={{ marginLeft: "4rem" }}>
          <h5>REGISTER NEW COURSE</h5>
        </div>
      </center>
      <form
        action="/registercourse"
        method="POST"
        style={{ marginLeft: "7rem" }}
      >
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-icon">
              <i class="fa fa-book"></i>
            </span>
            <input
              type="text"
              name="coursecode"
              placeholder="Course Code"
              required
              minlength="10"
              maxlength="10"
            />
            <br />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-icon">
              <i class="fa fa-book"></i>
            </span>
            <input
              type="text"
              name="coursename"
              placeholder="Course Name"
              required
              minlength="10"
            />
            <br />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-icon">
              <i class="fa fa-book"></i>
            </span>
            <input
              type="number"
              name="coursecredits"
              placeholder="Course Credits"
              style={{ minWidth: "100%" }}
            />
            <br />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-icon">
              <i class="fa fa-user-shield"></i>
            </span>
            <input
              type="text"
              id="contacthours"
              name="contacthours"
              placeholder="Contact Hours"
              required
              minlength="5"
              maxlength="5"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-icon">
              <i class="fa fa-user-shield"></i>
            </span>
            <input
              type="text"
              id="nbacode"
              name="nbacode"
              placeholder="NBA Code"
              required
              minlength="1"
            />
          </div>
        </div>
        <div class="col-md-1 d-flex mb-3" style={{ minWidth: "100%" }}>
          <div class="col-md-12">
            <select class="form-select" name="department">
              <option value="" disabled selected>
                Select Course Department
              </option>
              <option id="CSE" value="CSE">
                CSE
              </option>
              <option id="IT" value="IT">
                IT
              </option>
              <option value="ECE">ECE</option>
              <option value="HSS">HSS</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 d-flex mb-3" style={{ minWidth: "100%" }}>
          <div class="col-md-12">
            <select class="form-select" name="semester">
              <option value="" disabled selected>
                Select Course Semester
              </option>
              <option id="2023EVENSEM" value="2023EVENSEM">
                2024ODDSEM
              </option>
              <option id="2024EVENSEM" value="2024EVENSEM">
                2024EVENSEM
              </option>
              <option id="2023ODDSEM" value="2023ODDSEM">
                2023ODDSEM
              </option>
              <option id="2024ODDSEM" value="2023EVENSEM">
                2023EVENSEM
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-6 d-flex mb-3" style={{ minWidth: "100%" }}>
          <div class="col-md-12">
            <select class="form-select" name="year">
              <option value="" disabled selected>
                Select Year
              </option>
              <option id="year1" value={1}>
                <i class="fas fa-chalkboard-teachers"></i>Year 1
              </option>
              <option id="year2" value={2}>
                Year 2
              </option>
              <option id="year3" value={3}>
                Year 3
              </option>
              <option id="year4" value={4}>
                Year 4
              </option>
            </select>
          </div>
        </div>
        <div class="form-group text-center">
          <button type="submit">Register Course</button>
        </div>
      </form>
    </>
  );
};

export default Course;
