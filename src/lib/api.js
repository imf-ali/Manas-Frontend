import axios from "axios";

class ManasInstance {
  constructor(host) {
    this.host = host;
  };

  setToken(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  };

  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  getToken() {
    return localStorage.getItem('token');
  }

  async loginHandler(email, password, user){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/${user}/login`,
        data: {
          email: email,
          password: password
        }
      };
      const res = await axios(options);
      if(res.status === 201) {
        this.setToken(res.data.token, user);
      }
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async logoutHandler(user){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/${user}/logout`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const res = await axios(options);
      console.log(res)
      if(res.status === 200) {
        this.removeToken();
      }
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getNotice(){
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/getNotice`,
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getAllNotice(){
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        url: `${this.host}/admin/getAllNotice`,
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async submitNotice(heading, data){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/admin/addNotice`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          heading: heading,
          data: data
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteNotice(noticeId){
    try {
      const options = {
        method: 'DELETE',
        url: `${this.host}/admin/deleteNotice`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          id: noticeId
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async showNotice(noticeId, show){
    try {
      const options = {
        method: 'PATCH',
        url: `${this.host}/admin/showNotice`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          id: noticeId,
          show: show
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }
};

export default ManasInstance;