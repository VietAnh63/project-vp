import React from 'react'
import { connect } from 'react-redux'
import loadData from './../ConnectAPI'
//import axios from 'axios'
class Main extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               itemsAPI: [],
               visible: 9,
               loadingState: false
          }
     }

     componentDidMount() {

          loadData().then((res) => {
               this.props.run(res.data)
          })
     }

     onClickLoadMore = (e) => {
          e.preventDefault()
          this.loadMore()

     }
     mapData = () => {
          var items = this.props.data.map((val,ind)=>{
               if(val.title.length > 0){
               return val.title
               }
          })
          return items
     }

     
     displayItems = () => {
          var dataTitle = this.mapData()
          var items = []
          for (var i = 0; i < this.state.visible; i++) {
               if(dataTitle[i] !== ""){
               items.push(<div className="col-lg-4 col-md-6" key={i} >
                    <div className="card h-100">
                         <div className="single-post post-style-1">
                              <div className="blog-image"><img src="images/marion-michele-330691.jpg" alt="Blog Image" /></div>
                              <a className="avatar" href="123"><img src="images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                              <div className="blog-info">
                                   <h4 className="title"><a href="123"><b>{dataTitle[i]}</b></a></h4>
                                   <ul className="post-footer">
                                        <li><a href="123"><i className="ion-heart" />57</a></li>
                                        <li><a href="123"><i className="ion-chatbubble" />6</a></li>
                                        <li><a href="123"><i className="ion-eye" />138</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>)}
          }
          return items
     }


     loadMore = () => {
          var x 
          if(this.props.data.length - this.state.visible >=9 ){
               x = 9
          }else {
               x = (this.props.data.length - this.state.visible)
          }
          if (this.state.loadingState) {
               return;
          } else {
               this.setState({ loadingState: true });
               setTimeout(() => {
                    this.setState({ visible: this.state.visible + x, loadingState: false })                    
               }, 1000)

          }
     }

     render() {
          return (
               <section className="blog-area section">
                    <div className="container">
                         <div className="row">
                              {this.displayItems()}
                         </div>
                         {(this.state.visible < this.props.data.length)?<a className="load-more-btn" href="123" onClick={(e) => this.onClickLoadMore(e)}><b>LOAD MORE</b></a>:false}
                    </div>
               </section>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          data: state.dataAPI
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          run: (data) => dispatch({
               type: "GET-DATA",
               payload: data
          })
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);