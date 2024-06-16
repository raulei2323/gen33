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
import clsx from "clsx"

export default function Video({ image, title, channel }) {
  // if (!channel) {
  //     return (
  //         <article>
  //             <p>Inconmpleto</p>
  //         </article>
  //     )
  // }

//   const articleClassnames =
//    'video-card' + (channel === 'Lofi Girl3' ? ' special' : '') //if used get rid of .join(" ") in the article className

// let articleClassnames = ['video-card']
// if (channel === 'Lofi Girl3') {
//     articleClassnames.push("special")
// }
  return (
    <article className={clsx("video-card", { "special red": channel === "Lofi Girl3"})}>
      <img src={image} alt='' />
      <footer>
        {channel && (
          <img
            src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`}
            alt=''
          />
        )}
        {
            !channel && (
                <span>🤷‍♂️ </span>
            )
        }
        <p className='vide-card-title'>{title}</p>
        <p className='video-card-channel'>{channel || 'UNKNOWn'}</p>
      </footer>
    </article>
  );
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
