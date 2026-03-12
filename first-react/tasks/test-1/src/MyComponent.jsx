import { useEffect, useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Count: ${count}`;
    });


    function addCount() {
        setCount(c => c + 1);
        console.log(count);

    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>);
}

export default MyComponent;