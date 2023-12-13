export default function ErrorComponent({message}){
    return (
        <>
         <div className="mb-3 bg-red-900 p-2 text-center">
            <span className="text-white font-bold text-center">{message}</span>
        </div>
        </>
    )
}