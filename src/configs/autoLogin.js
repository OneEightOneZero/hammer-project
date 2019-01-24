
// let fn ={
//     true:() => {
//         console.log(666);
//     },
//     false() {
//         this.$router.push({ name: "login" });
//         return this;
//     },
//     getToken = () => {
//         return new Promise((resolve, reject) => {
//             $.ajax({
//             type: "POST",
//             headers: {
//                 token: localStorage.getItem("token")
//             },
//             url: "http://localhost:3000/users/autoLogin",
//             success(data) {
//                 resolve(data);
//             }
//             });
//         });
//     }
// }

login() {
    this.$axios({
      method: "post",
      headers:{
        token: localStorage.getItem("token")
      },
      url: "http://39.96.28.141:3000/users/autoLogin"
      
    }).then(res => {
      console.log(res.status);
      let fn = {
        true: ()=>{
        //   localStorage.setItem("token",res.data.token);
          console.log(666);
        },
        false:()=>{
          this.$router.push({ name: "login" });
        }
      }
      fn[res.data.status]();
    });
  }
