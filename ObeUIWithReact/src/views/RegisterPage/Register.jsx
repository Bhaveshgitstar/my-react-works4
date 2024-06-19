const RegisterPage = () => {
  return (
    <form action="/register" method="POST">
      <h2 class="box-heading">Register</h2>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-icon">
            <i class="fa fa-user"></i>
          </span>
          <input
            type="text"
            name="user"
            placeholder="Full Name"
            required
            minlength="3"
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
            id="username"
            name="username"
            placeholder="Username"
            required
            minlength="3"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-icon">
            <i class="fa fa-lock"></i>
          </span>

          <input
            type="password"
            class=""
            id="password"
            name="password"
            placeholder="Password"
            required
            minlength="8"
          />
        </div>
      </div>
      <div class="col-md-12 d-flex mb-3">
        <div class="col-md-3">
          <select
            class="form-select"
            name="role"
            id="academicYearDropdown"
            style={{ width: "27vw" }}
          >
            <option value="" disabled selected>
              Select Your Role
            </option>
            <option id="Teacher" value="Teacher">
              <i class="fas fa-chalkboard-teachers"></i>Teacher
            </option>
            <option id="Coordinator" value="Coordinator">
              Coordinator
            </option>
            <option id="Admin" value="Admin">
              Admin
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-12 d-flex mb-3">
        <div class="col-md-3">
          <select
            class="form-select"
            name="Department"
            id="departmentDropdown"
            style={{ width: "27vw" }}
          >
            <option value="" disabled selected>
              Select Your Department
            </option>
            <option id="CSE" value="CSE">
              CSE
            </option>
            <option id="IT" value="IT">
              IT
            </option>
            <option id="ECE" value="ECE">
              ECE
            </option>
            <option id="HSS" value="HSS">
              HSS
            </option>
          </select>
        </div>
      </div>

      <div class="form-group text-center">
        <button onclick="run()" type="submit2">
          Back
        </button>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};
export default RegisterPage;
