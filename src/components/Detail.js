import React from 'react'
import loadData from './../ConnectAPI'
import { connect } from 'react-redux'
import loadCmt from './../ConnectAPIcmt'
import { v4 as uuidv4 } from 'uuid'
class Detail extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               dataAPI: [],
               dataCmt: [],
               count: [],
               push: [],
               name: "",
               email: "",
               message: "",
               addCmt: []
          }
     }

     async componentDidMount() {
          loadCmt().then((res) => {
               this.props.run1(res.data)
               this.props.getCount(this.mapCmt.length)
               this.mapCmt()
               //this.props.pushComment(this.mapCmt())
               this.props.addCmt(this.props.addCmt)
               this.setState({
                    dataCmt: this.props.cmt,
                    count: this.props.count,
                    push: this.props.push,
                    //comments: this.props.cmt
               })
               
               console.log("lo", res.data);
               console.log("aa", this.state.dataCmt)
          })

          loadData().then((res) => {
               this.props.run(res.data)
               this.setState({
                    dataAPI: this.props.data,
               })
          })


     }

     componentDidUpdate(){
          this.displayfinalItem()
     }

     displayfinalItem = (i) => {
          var fli = []
          if(i === parseInt(this.props.match.params.id)){
               fli[i].push( <div className="comment">
               <div className="post-info">
                    <div className="middle-area">
                         <a className="name" href="#"><b>{this.state.addCmt['name']}</b></a>
                         <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                    </div>
                    <div className="right-area">
                         <h5 className="reply-btn"><a href="#"><b>REPLY</b></a></h5>
                    </div>
               </div>
               <p>{this.state.addCmt['body']}</p>
          </div>)
          this.addCmt(fli[i])
          }

          return fli


     }

     pushItem = (e, i) => {
          var arr = this.Create2DArray(100)
          e.preventDefault()
          this.state.count[i] = this.state.count[i] + 1
          this.setState({
               count: this.props.count
          })
          var postId = parseInt(this.props.match.params.id, 10)

          //this.onChange(e)
          var add = {
               "postId": postId,
               "id": uuidv4(),
               "name": this.state.name,
               "email": this.state.email,
               "body": this.state.message
          }
          this.setState({
               dataCmt: [
                     ...this.state.dataCmt, add
               ]
               //dataCmt: this.state.dataCmt.push(add)
          }, () => {
               console.log("dataCmt: ", this.state.dataCmt)
               //console.log('501:', this.state.dataCmt[this.state.dataCmt.length-1])
               this.props.run1(this.state.dataCmt)
               //this.props.pushComment(this.mapCmt())
               this.setState({
                    addCmt: add
               }, () => {
                    console.log("push", this.state.addCmt);
                    this.props.addCmt(this.state.addCmt)
               })
          })
          //this.props.cmt = this.state.dataCmt
          //      return <div className="comment">
          //      <div className="post-info">
          //           <div className="middle-area">
          //                <a className="name" href="#"><b>{this.state.addCmt['name']}</b></a>
          //                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
          //           </div>
          //           <div className="right-area">
          //                <h5 className="reply-btn"><a href="#"><b>REPLY</b></a></h5>
          //           </div>
          //      </div>
          //      <p>{this.state.addCmt['body']}</p>
          // </div>


     }

     Create2DArray = (rows) => {
          var arr = [];
          for (var i = 0; i < rows; i++) {
               arr[i] = [];
          }
          return arr;
     }
     mapCmt = () => {
          var arrCmt = this.Create2DArray(this.state.dataCmt.length)
          for (var i = 0; i < this.state.dataCmt.length; i++) {
               for (var j = 0; j < this.state.dataCmt.length; j++) {
                    //count = count + 1
                    if (this.state.dataCmt[j]['postId'] === (i + 1))
                         arrCmt[i].push(<div className="comment">
                              <div className="post-info">
                                   <div className="middle-area">
                                        <a className="name" href="#"><b>{this.state.dataCmt[j]['email']}</b></a>
                                        <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                   </div>
                                   <div className="right-area">
                                        <h5 className="reply-btn"><a href="#"><b>REPLY</b></a></h5>
                                   </div>
                              </div>
                              <p>{this.state.dataCmt[j]['body']}</p>
                         </div>
                         )
               }
               //console.log("aa", arrCmt[i])

          }
          return arrCmt
     }
     onChange = (e) => {
          let nam = e.target.name
          let val = e.target.value
          this.setState({ [nam]: val }, () => {
               console.log(this.state[nam]);

          })
     }
     mapData = () => {
          var id = parseInt(this.props.match.params.id, 10)
          for (var i = 0; i < this.state.dataAPI.length; i++) {
               if (id === i + 1) {
                    return <div>
                         <section className="post-area section">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-8 col-md-12 no-right-padding">
                                             <div className="main-post">
                                                  <div className="blog-post-inner">
                                                       <div className="post-info">
                                                            <div className="middle-area">
                                                                 <a className="name" href="#"><b>Katy Liu</b></a>
                                                                 <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                            </div>
                                                       </div>
                                                       <h3 className="title"><a href="#"><b>{this.state.dataAPI[i]['title']}</b></a></h3>
                                                       <p className="para">{this.state.dataAPI[i]['body']}</p>
                                                       <div className="post-image"><img src="/images/blog-1-1000x600.jpg" alt="Blog Image" /></div>
                                                       <ul className="tags">
                                                            <li><a href="#">Mnual</a></li>
                                                            <li><a href="#">Liberty</a></li>
                                                            <li><a href="#">Recommendation</a></li>
                                                            <li><a href="#">Inspiration</a></li>
                                                       </ul>
                                                  </div>
                                                  <div className="post-icons-area">
                                                       <ul className="post-icons">
                                                            <li><a href="#"><i className="ion-heart" />57</a></li>
                                                            <li><a href="#"><i className="ion-chatbubble" />6</a></li>
                                                            <li><a href="#"><i className="ion-eye" />138</a></li>
                                                       </ul>
                                                       <ul className="icons">
                                                            <li>SHARE : </li>
                                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                                            <li><a href="#"><i className="ion-social-pinterest" /></a></li>
                                                       </ul>
                                                  </div>

                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 no-left-padding">
                                             <div className="single-post info-area">
                                                  <div className="sidebar-area about-area">
                                                       <h4 className="title"><b>ABOUT BONA</b></h4>
                                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                       ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                Ut enim ad minim veniam</p>
                                                  </div>
                                                  <div className="sidebar-area subscribe-area">
                                                       <h4 className="title"><b>SUBSCRIBE</b></h4>
                                                       <div className="input-area">
                                                            <form>
                                                                 <input className="email-input" type="text" placeholder="Enter your email" />
                                                                 <button className="submit-btn" type="submit"><i className="icon ion-ios-email-outline" /></button>
                                                            </form>
                                                       </div>
                                                  </div>
                                                  <div className="tag-area">
                                                       <h4 className="title"><b>TAG CLOUD</b></h4>
                                                       <ul>
                                                            <li><a href="#">Manual</a></li>
                                                            <li><a href="#">Liberty</a></li>
                                                            <li><a href="#">Recomendation</a></li>
                                                            <li><a href="#">Interpritation</a></li>
                                                            <li><a href="#">Manual</a></li>
                                                            <li><a href="#">Liberty</a></li>
                                                            <li><a href="#">Recomendation</a></li>
                                                            <li><a href="#">Interpritation</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <section className="recomended-area section">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                             <div className="card h-100">
                                                  <div className="single-post post-style-1">
                                                       <div className="blog-image"><img src="/images/alex-lambley-205711.jpg" alt="Blog Image" /></div>
                                                       <a className="avatar" href="#"><img src="/images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                                                       <div className="blog-info">
                                                            <h4 className="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
                                      Concepts in Physics?</b></a></h4>
                                                            <ul className="post-footer">
                                                                 <li><a href="#"><i className="ion-heart" />57</a></li>
                                                                 <li><a href="#"><i className="ion-chatbubble" />6</a></li>
                                                                 <li><a href="#"><i className="ion-eye" />138</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                             <div className="card h-100">
                                                  <div className="single-post post-style-1">
                                                       <div className="blog-image"><img src="/images/caroline-veronez-165944.jpg" alt="Blog Image" /></div>
                                                       <a className="avatar" href="#"><img src="/images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                                                       <div className="blog-info">
                                                            <h4 className="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
                                      Concepts in Physics?</b></a></h4>
                                                            <ul className="post-footer">
                                                                 <li><a href="#"><i className="ion-heart" />57</a></li>
                                                                 <li><a href="#"><i className="ion-chatbubble" />6</a></li>
                                                                 <li><a href="#"><i className="ion-eye" />138</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                             <div className="card h-100">
                                                  <div className="single-post post-style-1">
                                                       <div className="blog-image"><img src="/images/marion-michele-330691.jpg" alt="Blog Image" /></div>
                                                       <a className="avatar" href="#"><img src="/images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                                                       <div className="blog-info">
                                                            <h4 className="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
                                      Concepts in Physics?</b></a></h4>
                                                            <ul className="post-footer">
                                                                 <li><a href="#"><i className="ion-heart" />57</a></li>
                                                                 <li><a href="#"><i className="ion-chatbubble" />6</a></li>
                                                                 <li><a href="#"><i className="ion-eye" />138</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <section className="comment-section">
                              <div className="container">
                                   <h4><b>POST COMMENT</b></h4>
                                   <div className="row">
                                        <div className="col-lg-8 col-md-12">
                                             <div className="comment-form">
                                                  <form method="post">
                                                       <div className="row">
                                                            <div className="col-sm-6">
                                                                 <input type="text" aria-required="true" onChange={(e) => this.onChange(e)} name="name" className="form-control" placeholder="Enter your name" aria-invalid="true" required />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                 <input type="email" aria-required="true" onChange={(e) => this.onChange(e)} name="email" className="form-control" placeholder="Enter your email" aria-invalid="true" required />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                 <textarea name="message" onChange={(e) => this.onChange(e)} rows={2} className="text-area-messge form-control" placeholder="Enter your comment" aria-required="true" aria-invalid="false" defaultValue={""} />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                 <button onClick={(e) => this.pushItem(e, i)} className="submit-btn" type="submit" id="form-submit"><b>POST COMMENT</b></button>
                                                            </div>
                                                       </div>
                                                  </form>
                                             </div>
                                             <h4><b>COMMENT:{this.state.count[i]}</b></h4>
                                             <div className="commnets-area" id="abc">
                                                  {this.mapCmt()[i]}
                                                  {/* {this.state.push[i]}  */}
                                                  {/* {this.mapCmt()[i][this.mapCmt()[i].length-1]} */}
                                                  {this.state.addCmt[i]}
                                             </div>

                                        </div><b>
                                        </b></div><b>
                                   </b></div><b>
                              </b></section><b>
                         </b></div>
               }
          }

     }
     render() {
          return (<>
               {this.mapData()}
          </>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          data: state.dataAPI,
          cmt: state.datacmt,
          count: state.count,
          push: state.push,
          addCmt: state.addCmt
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          run: (data) => dispatch({
               type: "GET-DATA",
               payload: data
          }),
          run1: (data) => dispatch({
               type: "GET-CMT",
               payload: data
          }),
          getCount: (data) => ({
               type: "GET-COUNT",
               payload: data

          }),
          pushComment: (data) => ({
               type: "INCREASE-COMMENT",
               payload: data
          }),
          addCmt: (data) => ({
               type: "ADD-CMT",
               payload: data
          })
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
