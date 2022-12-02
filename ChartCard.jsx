function Chat({name,message}) {
  return (
    <>
    <div className="FullCard">
      <div className="Image"></div>
      <div className="Contact">
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </div>
    </>
  );
}
export default Chat;