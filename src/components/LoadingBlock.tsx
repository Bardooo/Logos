const LoadingBlock = () => {
  return (
    <div className='loading-block'>
      <div className="loading-block__inner">
        <div className="loading-block__wrap">
          <div className="loading-block__img" id="loader-1"></div>
        </div>
        <p className="loading-block__text">Идет загрузка данных с сервера</p>
      </div>  
    </div>
  )
}

export default LoadingBlock