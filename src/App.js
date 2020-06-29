import React,{Fragment, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import AddPostBtn from "./Components/AddPostBtn";
import Footer from "./Components/Footer";
import AddPostModal from "./Components/AddPostModal";

const data  = {
    post1:{
        name : 'Meir',
        numberOfLike : 2,
        img : "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        comments:["comment1 ","comment2"],
        nameComments : ["michel","patrick"]

    },
    post2:{
        name : 'Mike',
        numberOfLike : 0,
        img: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        comments:["comment1 ","comment2"],
        nameComments : ["dan","bernard"]

    },

};
let i=2;

class App extends Component{
    state = {
        data,
        numberOfLike:0,
        nameBuffer:'',
        commentBuffer:'',
        isShow : false,
        imgBuffer:''
    };


    like = id =>{
        const data = {... this.state.data};
        data[id].numberOfLike += 1;
        // console.log("esaye");
        this.setState({data});
    };

    addComment = (id)=>{
        const data = {... this.state.data};
        if(this.state.nameBuffer === ''){
            alert('Please enter your name for comment this post')
        }else if (this.state.commentBuffer === ''){
            alert("please enter a comment")
        }else{
            data[id].nameComments.push(this.state.nameBuffer);
            data[id].comments.push(this.state.commentBuffer);
            this.setState({data});
        }
    };

    handleChangeName = (event)=>{
        const name = event.target.value;
        this.setState({nameBuffer : name});
    };
    handleChangeComment = (event)=>{
        const comment = event.target.value;
        this.setState({commentBuffer : comment});
    };

    handleChangeImg = (event)=>{
        const imgUrl = event.target.value;
        this.setState({img : imgUrl});
    };

    toogleModal = ()=>{
        const isShow = !this.state.isShow;
        this.setState({isShow});
    };

    addPost = (event)=>{
        event.preventDefault();

        let data = {... this.state.data};
        i+=1;
        let a = "post"+(i).toString();
        console.log(a);
        data [a] = {
            name : this.state.nameBuffer,
            numberOfLike : 0,
            img : this.state.imgBuffer,
            comments:[this.state.commentBuffer],
            nameComments : ["me"]
        };

        this.setState({data, isShow:false} );
    };


    render() {
        const {numberOfLike , data , isShow} = this.state;



        const listOfPost = Object.keys(data).map(id =>
            <Post
                key={id}
                name = {data[id].name}
                img = {data[id].img}
                comments = { data[id].comments}
                nameComments = {data[id].nameComments}
                addLike = {()=>this.like(id)}
                numberOfLike = {data[id].numberOfLike}
                nameCommentChange = { event=>this.handleChangeName(event)}
                CommentChange = { event=>this.handleChangeComment(event)}
                addComment ={()=>this.addComment(id)}
            ></Post>
        );


        return (
            <Fragment>
                <NavBar like = {numberOfLike}/>

                {listOfPost}

                {isShow? <AddPostModal show ={()=>this.toogleModal()}
                                       nameChange={event=>this.handleChangeName(event)}
                                       legendChange={event=>this.handleChangeComment(event)}
                                       imgChange={event=>this.handleChangeImg(event)}
                                       send={event=>this.addPost(event)} />:''}

                <AddPostBtn toogleModal ={()=>this.toogleModal()}/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;
