# React Note

## props

必须用`{}`解引用

```js
import React from 'react'

export function test(props)
{
    return (
        <div> {props.text} <div/>
    )
}
```

## state and map

```js
import React from 'react'

export default function test(props)
{
    const [messages, setMessages] = React.useState(["a", "b"]);

    setMessages(messages => {
        const newmessages = ["a", "b", "c"];
        return newmessages;
    })

    const messagediv = messages.map(message => {
        return (<p> {message} <p/>)
    });

    return (
        <div> {messagediv} <div/>
    )
}
```

## conditional render

```js
import React from 'react'

export default function test(props)
{

    return (
        <div> 
             { isShow && <p> sadasd <p/> }
         <div/>
    )
}
``` 

## form
```js
import React from 'react'

export default function Form(props)
{
    const [formData, seFormData] = React.useState({
        firstName: "",
        lastName: ""
    });

    function handleChange(event)
    {
        setFormData(formData => {
            {
                ...formData,
                [event.target.name]: event.target.value,
            }
        })
    }
    return (
        <form>
            <input onChange={handleChange} name="firstName"><input/>
            <input onChange={handleChange} name="lastName"><input/>
        <form/>
    )
}
```

## useEffect
``Effect``是在``return``之后才执行。

并根据第二个参数参数是否改变，而决定是否执行回调函数。

```js
import React from "react";

export default function Navbar()
{
    const [message, setmessage] = React.useState("asdasd");
    const [count, setCount] = React.useState(0);
    console.log("Render ran!");

    function handleClick()
    {
        setCount(count => {
            const newcount = count + 1;
            console.log(newcount);
            return newcount;
        })
    }

    React.useEffect(function(){
        console.log("effect ran!");
    }, [0]);

    return (
        <nav>
            <h1> {count} </h1>
            <button onClick={handleClick}> add </button>
        </nav>
    )
}
```
