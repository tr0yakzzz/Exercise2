export default function Done({ todos }) {
    let i = 1;//index    

    const display = () => {

        return todos.map((todo, index) => {
            if (todo.isDone === true) {
                return (
                    <li className="text-lg pt-5 flex" key={index}>
                        <div className="grow">
                            <div className="font-bold">{i++}: {todo.title}</div>
                            <div>{todo.description}</div>
                        </div>
                    </li>
                )
            }
        })

    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold">Done:
                    </div>
                </div>
                <ul>
                    {

                        display()

                    }

                </ul>
            </div>
        </div>
    )
}