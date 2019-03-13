import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import style from './EntryList.scss'

class EntryList extends Component {
  render() {
    const data = this.props
    return (
      <div className={style["content-box"]}>
        <div className={style["info"]}>
          <div className={style["content-label"]}>
            <ul>
              {
                data.hot && <li className={`${style["label-point"]} ${style["hot"]}`}>热</li>
              }
              {
                data.column && <li className={`${style["label-point"]} ${style["column"]}`}>专栏</li>
              }
              <li className={`${style["label-point"]} ${style["auth"]}`}>
                <Link to={`/user/${data.authId}`}>{data.auth}</Link>
              </li><li className={style["label-point"]}>
                {data.date}
              </li><li className={`${style["label-point"]} ${style["sort"]}`}>
                { data.sort.map((item, i) => {
                  return <Link to={`/tag/${item.name}`} key={i}>{ item.name }</Link>
                }) }
              </li>
            </ul>
          </div>
          <div className={style["title"]}>
            <Link to={`/post/${data.authId}`}>{ data.title }</Link>
          </div>
          <div className={style["action"]}>
            <ul>
              <li>
                <a href="">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                  <span>{data.thumb}</span>
                </a>
              </li><li>
                <a href="">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg==" alt="" />
                  <span>{data.comment}</span>
                </a>
              </li><li className={`${style["hover"]} ${style["share-btn"]}`}>
                <a href="">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QjFBMjZEODAtQ0ZCRC00REIyLThCQTAtODc0MEVBMTE2RTExPC90aXRsZT48ZyBzdHJva2U9IiNBQUIwQkEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUyNCAzLjQxM3Y4LjIzNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMy4wMjcgNy41MDhjLjgxMyAwIDEuNjc4LS4wMSAxLjY3OC0uMDEuNDQ5IDAgLjgxMi4zNzYuODEyLjgyNmwtLjAwNSA2LjM2YS44MTkuODE5IDAgMCAxLS44MTEuODI2SDYuMzFhLjgyMi44MjIgMCAwIDEtLjgxMS0uODI2bC4wMDUtNi4zNmMwLS40NTYuMzYtLjgyNS44MTItLjgyNWwxLjY4OS4wMDZNOC4zNzMgNS4xMTFsMi4xNDMtMi4wOSAyLjE0MyAyLjA3Ii8+PC9nPjwvc3ZnPg==" alt="" />
                </a>
              </li><li className={style["hover"]}>
                <a href="">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik04LjEzNiAxMi40NDZjLS4zNTItLjE5NS0uOTIyLS4xOTUtMS4yNzQgMGwtMi41MzcgMS4zOTdjLS43MDQuMzg2LTEuMTY0LjAzMy0xLjAzLS43ODZMMy43OCAxMC4xYy4wNjctLjQxLS4xMDktLjk3OC0uMzk1LTEuMjdMMS4zMzQgNi43MzZjLS41Ny0uNTgyLS4zOTEtMS4xNS4zOTQtMS4yN2wyLjgzNS0uNDNjLjM5My0uMDYxLjg1NS0uNDEyIDEuMDMtLjc4NmwxLjI2OC0yLjY5MWMuMzUzLS43NDYuOTI0LS43NDQgMS4yNzUgMGwxLjI3IDIuNjkxYy4xNzUuMzc0LjYzNy43MjYgMS4wMzEuNzg1bDIuODM2LjQzMmMuNzg2LjExOS45NjIuNjkuMzkzIDEuMjdMMTEuNjE0IDguODNjLS4yODUuMjkyLS40NjIuODYtLjM5NSAxLjI3bC40ODUgMi45NTdjLjEzNS44MjItLjMyOSAxLjE3Mi0xLjAzLjc4NmwtMi41MzgtMS4zOTd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        { data.thumbnail.flag ?
          <div className={style["thumb"]}>
            <img src={data.thumbnail.img} alt=""/>
          </div>
          : ''
        }
      </div>
    )
  }
}
export default EntryList