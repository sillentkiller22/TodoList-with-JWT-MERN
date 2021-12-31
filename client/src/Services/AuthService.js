export default{
    login: user => {
      return fetch("/api/login", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => data);
    },
  
    register : user => {
      return fetch("/api/register2", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => data);
    },
  
    logout: () => {
      return fetch("/api/logout")
        .then(res => res.json())
        .then(data => data);
    },
  
    isAuthenticated: () => {
      return fetch("api/authenticated").then(res => {
        if (res.status !== 401) return res.json().then(data => data);
        else return { isAuthenticated: false, user: { username: "", role: "" } };
      });
    }
  };




/*

export default{
    login : user =>{
        return fetch('/user/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },

    register : user =>{
        return fetch('/user/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },

    logout : ()=>{
        return fetch('/user/logout')
            .then(res => res.json())
            .then(data => data);
    },

    isAuthenticated : () => {
        return fetch('/user/autheticated')
            .then(res =>{
                if(res.status !== 401)
                    return res.json().then(data => data);
                else
                    return {isAuthenticated : false , user : {username : "", role : ""}}
            })
    }
}

*/
