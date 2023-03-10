import axios from "axios";

class ManasInstance {
  constructor(host) {
    this.host = host;
  };

  setToken(token, user, userId) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('userId', userId);
  };

  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
  };

  getToken() {
    return localStorage.getItem('token');
  }

  async signUpHandler(data){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student`,
        data: {
          ...data,
        }
      };
      const res = await axios(options);
      if(res.status === 201) {
        this.setToken(res.data.token, 'student', res.data.user._id);
      }
      return res;
    } catch (e) {
      console.error(e);
    }
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
        this.setToken(res.data.token, user, res.data.user._id);
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

  async submitMainNotice(heading){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/admin/addNotice`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          heading: heading,
          mainNotice: true,
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

  async updateData(studentId, payload){
    try {
      const options = {
        method: 'PATCH',
        url: `${this.host}/student/${studentId}/update`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          ...payload,
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getUserData(userId){
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        url: `${this.host}/student/${userId}/me`,
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async makePayment(amount){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/payment`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          amount: amount
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async generateAdmitCard(){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/renderadmitcard`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getApprovedBlogs(){
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/getBlog`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getApprovedBlogById(blogid){
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/getBlog/${blogid}`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async getAllBlogs(){
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/admin/Blog`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async showBlog(blogId, show){
    try {
      const options = {
        method: 'PATCH',
        url: `${this.host}/admin/Blog`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          id: blogId,
          show: show
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteBlog(blogId){
    try {
      const options = {
        method: 'DELETE',
        url: `${this.host}/admin/Blog`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          id: blogId
        }
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  async submitBlog(inputObj, data, heading){
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/uploadBlog`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          name: inputObj.name,
          email: inputObj.email,
          phone: inputObj.phone,
          data: data,
          heading: heading,
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