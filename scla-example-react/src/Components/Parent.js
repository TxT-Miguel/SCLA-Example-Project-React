import Child from "./Child";

const Parent = () => {
    return (
        <div>
            <Child passingData="Hello from parent"/>
        </div>
    )
}

export default Parent;