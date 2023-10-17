const ErrorBlock = () => {
  return (
    <div className='error-block'>
      <div className="error-block__inner">
        <h4 className="error-block__title">Непредвиденные неполадки:(</h4>
        <p className="error-block__text">Произошла ошибка при получении данных</p>
        <p className="error-block__text">Попробуйте перезагрузить страницу</p>
      </div>
    </div>
  )
}

export default ErrorBlock
