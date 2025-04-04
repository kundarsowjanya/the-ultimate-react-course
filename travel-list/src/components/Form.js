import { useState } from "react"
export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    function handleSunmit(e) {
        e.preventDefault()

        if (!description) {
            return
        }
        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false
        }

        onAddItems(newItem)

        setDescription("")
        setQuantity(1)
    }

    return (
        <form className="add-form" onSubmit={handleSunmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => {
                        return (
                            <option value={num} key={num}>{num}</option>
                        )
                    })
                }
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>Add</button>
        </form>
    )

}