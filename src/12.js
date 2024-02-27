// import logo from './logo.svg';
// import { useState } from 'react';
import { useRef, useState } from 'react';
import './App.css';
import avcatar from './logo.svg';
import _ from 'lodash';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid' 
import dayjs from 'dayjs';
// function getCurrentDateTime() {
//   var currentDate = new Date();

//   var year = currentDate.getFullYear();
//   var month = addLeadingZero(currentDate.getMonth() + 1);
//   var day = addLeadingZero(currentDate.getDate());
//   var hours = addLeadingZero(currentDate.getHours());
//   var minutes = addLeadingZero(currentDate.getMinutes());
//   var seconds = addLeadingZero(currentDate.getSeconds());

//   return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
// }

// // 辅助函数：如果数字小于10，在前面补0
// function addLeadingZero(number) {
//   return (number < 10 ? '0' : '') + number;
// }


// 评论数据
const list = [
  {
    rpid:3,
    user: {
      uid:"123123123",
      avatar:'http://toutiao.itheima.net/resources/images/98.jpg',
      uname:"里斯"
    },
    content:"哎呦, 哎呦, 哎呦哎呦不错哦",
    ctime:"10-18 08:15",
    like:88
  },
  {
    rpid:2,
    user: {
      uid:"30009257",
      avatar:'http://toutiao.itheima.net/resources/images/98.jpg',
      uname:"wangsan"
    },
    content:"哎呦,哎呦,哎呦.不错哦",
    ctime:"10-18 08:15",
    like:88
  },
  {
    rpid:1,
    user: {
      uid:"30009257",
      avatar:'http://toutiao.itheima.net/resources/images/98.jpg',
      uname:"alex"
    },
    content:"哎呦,哎呦,不错哦",
    ctime:"10-18 08:15",
    like:88
  }
]
// 当前登录用户信息
const user = {
  uid:'30009257',
  avcatar,
  uname:"张三"
}

// 导航Tab数组
const tabs = [
  {type: "hot", text: "最热"},
  {type: "new", text: "最新"},
]

function App() {
  const [commentList, setCommentList] = useState(list)
  // 删除
  const handleDel = (id) => {
      setCommentList(commentList.filter(item => item.rpid !== id))
  }

  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
      setType(type)
      if(type === "hot") {
          setCommentList(_.orderBy(commentList,"like", 'desc'))
      }else {
          setCommentList(_.orderBy(commentList,"ctime", "desc"))
      }
  }

  const [content, setContent] = useState("")
  const inputRef = useRef(null)
  const handlePublish = () => {
    console.log('---')
    setCommentList(
      [
        ...commentList,
        {
          rpid:uuidv4(),
          user: {
            uid:"123123123",
            avatar:'http://toutiao.itheima.net/resources/images/98.jpg',
            uname:"里斯"
          },
          content:content,
          // ctime: dayjs(getCurrentDateTime()).format("MM-DD hh:mm") , 
          ctime: dayjs(new Date()).format("MM-DD hh:mm") , 
          like:88
        },
      ]
    )
    setContent('')
    inputRef.current.focus()
  }

  return (
    <div className="App">
       <div className='reply-navigation'> 
          <ul className='nav-bar'>
              <li className='nav-title'>
                   <span className='nav-title-text'>评论</span>
                   <span className='total-reply'>{10}</span>
              </li>
              <li className='nav-sort'> 
                 {/* {tabs.map(item => <span key={item.type} className={`nav-time ${type === item.type && 'active'}`} onClick={() => handleTabChange(item.type)}>{item.text}</span> )} */}
                 {tabs.map(item => <span key={item.type} className={classNames('nav-item', {active: type === item.type})} onClick={() => handleTabChange(item.type)}>{item.text}</span> )}
                   
              </li>
          </ul>
       </div>

       <div className='reply-warp'>
          {/* 发表评论 */}
          <div className='box-normal'>
              <textarea 
                className='reply-box-textarea'
                placeholder='发送一条评论'
                ref={inputRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {/* 发送评论 */}
              <div className='reply-box-send'> 
                    <div className='send-text' onClick={()=> handlePublish()}>发布</div>
              </div>
          </div>

          {/* 评论列表 */}
          <div className='reply-list'>
            {commentList.map(item=>(
              <div key={item.rpid} className='reply-item'>
                  <div className='root-reply-avatar'> 
                      <div className='bill-avatar'> 
                          <img className='bili-avatar-img' style={{width: "120px"}} alt='' src={item.user.avatar}/>
                      </div>

                      <div className='content-wrap'>
                          {/* 用户名 */}
                          <div className='user-info'>
                              <div className='user-name'> {item.user.uname} </div>
                          </div>
                          {/* 评论内容 */}
                          <div className='root-reply'>
                              <div className='reply-content'>
                                  {item.content}
                              </div>
                              <div className='reply-info'> 
                                {/* 评论时间 */}
                                <span className='reply-time'> {item.ctime} </span>
                                {/* 评论数量 */}
                                <span className='reply-time'>点赞数： {item.like} </span>
                                {user.uid === item.user.uid && 
                                  <span className='delete-btu' onClick={() => handleDel(item.rpid)}> 
                                    删除
                                  </span>
                                }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            ))}

          </div>
       </div>

       
    
    </div>
  )

}

export default App;
