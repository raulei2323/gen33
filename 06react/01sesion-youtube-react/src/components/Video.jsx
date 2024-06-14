// export default function Video(props) {
//     return(
//     <article className="video-card">
//         <img src={props.image} alt="" />
//         <footer>
//             <img src="" alt="" />
//             <p>{props.title}</p>
//             <p>{props.channel}</p>
//         </footer>
//     </article>

//     )
// }

// export default function Video(props) {
//     const { image, title, chanel } = props
//     return(
//     <article className="video-card">
//         <img src={props.image} alt="" />
//         <footer>
//             <img src="" alt="" />
//             <p>{props.title}</p>
//             <p>{props.channel}</p>
//         </footer>
//     </article>

//     )
// }

export default function Video({ image, title, channel }) {
    return(
    <article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`} alt="" />
            <p className="vide-card-title">{title}</p>
            <p className="video-card-channel">{channel}</p>
        </footer>
    </article>

    )
}

//! Lo siguiente esta mal ya que la funcion en jsx props solo recibe un parametro por so ponemos las llaves para poder poner mas objetos dentro de los params
//🩻
// export default function Video(image, title, channel) {
//     return(
//     <article className="video-card">
//         <img src={image} alt="" />
//         <footer>
//             <img src="" alt="" />
//             <p>{title}</p>
//             <p>{channel}</p>
//         </footer>
//     </article>

//     )
// }