


//请求js
getJs.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
         document.body.appendChild(script)
            
    }
        request.onerror=()=>{}
        request.send()
    }
//请求css
getCss.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const style =document.createElement("style")
                style.innerHTML= request.response
                document.head.appendChild(style)

            }else{
                alert("加载失败")
            }

        }

    }
    request.send()
}
//请求html
getHtml.onclick=()=>{
const request = new XMLHttpRequest()
request.open('GET','/3.html')
request.onload=()=>{
 
    const div =document.createElement('div')
    div.innerHTML= request.response
    document.body.appendChild(div)
}
request.onerror=()=>{}
request.send()
}
//请求xml
getXml.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')
            console.log(text[0].textContent.trim())

        }
    }
request.send()
}
//请求json
getJson.onclick=()=>{
const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
            if(request.readyState===4 && request.status===200){
                const object = JSON.parse(request.response)//转成js对象
                console.log(object)
                myname.textContent = object.name
        }
    }
request.send()

}
let n = 1 
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            
            const array= JSON.parse(request.response)
            array.forEach(item => {
               const li = document.createElement('li')
               li.textContent= item.id
               xxx.appendChild(li)

            });
           n=n+1
        }
    }
    request.send()

}