import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token){
            return res.status(401).json({
                success: false,
                message: 'Authentication required.',
            })
        }

        const tokenDecode = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        const user = await User.findById(tokenDecode.userId).select('-password')

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found.'
            })
        }

        req.user = user

        next()

    } catch (error) {
        console.error('Auth middleware error:', error)

        return res.status(401).json({
            success: false,
            message: 'Invalid or expired authentication token.'
        })
    }
}

export default authMiddleware;