<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <title>User Admin</title>
        <link rel="stylesheet" href=
            "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="user-admin.style.client.css" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="../services/user.service.client.js"></script>
        <script src="user-admin.controller.client.js"></script>
</head>
<body>

</body>

<table className="table">
    <thead>
    <tr>
        <th>Username</th>
        <th>Password</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role</th>
        <th>&nbsp;</th>
    </tr>
    <tr className="wbdv-form">
        <td><input id="usernameFld" className="form-control"
                   placeholder="Username"/></td>
        <td><input id="passwordFld" className="form-control"
                   placeholder="Password"/></td>
        <td><input id="firstNameFld" className="form-control"
                   placeholder="First Name"/></td>
        <td><input id="lastNameFld" className="form-control"
                   placeholder="Last Name"/></td>
        <td><select id="roleFld" className="form-control">
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
        </select></td>
        <td><span class="pull-right" style="white-space: nowrap">
      <i class="fa-2x fa fa-plus wbdv-create"></i>
      <i class="fa-2x fa fa-check wbdv-update"></i>
  </span></td>
    </tr>