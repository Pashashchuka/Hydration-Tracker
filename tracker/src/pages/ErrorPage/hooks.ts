import { useNavigate } from 'react-router-dom'

export const useErrorPage = () => {
  const navigate = useNavigate()

  const handleSubtitleClick = () => {
    navigate(-1)
  }

  return {
    handleSubtitleClick,
  }
}
