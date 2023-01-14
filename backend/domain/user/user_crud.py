from sqlalchemy.orm import Session
from domain.user.user_schema import UserCreate
from models import User
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_user(db: Session, user_create: UserCreate): #
    db_user = User(username=user_create.username,
                   password=pwd_context.hash(user_create.password1),
                   email=user_create.email)
    db.add(db_user)
    db.commit()
    
def get_existing_user(db: Session, user_create: UserCreate):
    return db.query(User).filter(
        (User.username == user_create.username) |
        (User.email == user_create.email)
    ).first()
    
def get_user(db: Session, username: str): 
    return db.query(User).filter(User.username == username).first()


def get_user_list(db: Session, skip: int = 0, limit: int = 10): # 유저 정보 가져오기
    _user_list = db.query(User)\
        .order_by(User.create_date.desc())

    total = _user_list.count()
    question_list = _user_list.offset(skip).limit(limit).all()
    return total, question_list  