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