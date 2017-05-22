//auth
import AuthService from '../../utils/AuthService';
const authid = process.env.REACT_APP_AUTH0_CLIENT_ID;
const authdomain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth = new AuthService(authid, authdomain);
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/' })
  }
}

const initialState = {
  activePost:'',
  userPageId:'',
  //auth:
  auth:auth,
  //app.js:
  profile:{},
  updated:false,
  affiliation:'',
  //newsfeed:
  test:'',
  stories:[],
  affiliation:'none',
  editing:false,
  //userpage:
  usrpg_updated:false,
  usrpg_posts:[],
  //userpanel:
  expanded:false,
  //userPic:
  up_user:{},
  //header:
  affiliation:'',
  previewingAlly:false,
  //account:
  updated:false,
  //postheader:
  user_preview_showing:false,
  toggleStatus:false,
  myPost:false,
  postId:'',
  //post:
  pst_user:{},
  //posts:
  editing:false,
  user:'',
  posts:{},
  //postheaderuser:
  phu_user:{},
  //signedin:
  loggedIn:false,
  //landingpage:
  loggedIn:false,
}

export default initialState;