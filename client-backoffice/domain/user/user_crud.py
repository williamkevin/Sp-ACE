import profile
from sqlalchemy.orm import Session
from domain.user.user_schema import UserCreate
from models import User
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_user(db: Session, user_create: UserCreate):
    db_user = User(username=user_create.username,
                   password=pwd_context.hash(user_create.password1),
                   email=user_create.email,
                   job = user_create.job,
                   profile = user_create.profile,
                   college_department = user_create.college_department,
                   is_mentor = user_create.is_mentor,
                   admin = 0
                   )
    db.add(db_user)
    db.commit()
    
def get_existing_user(db: Session, user_create: UserCreate):
    return db.query(User).filter(
        (User.username == user_create.username) |
        (User.email == user_create.email)
    ).first()
    
def get_user(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def get_mentor_list(db: Session,):
    _mentor_list_ = []
    for user in db.query(User).all():
        if user.is_mentor == 1:
            _mentor_list_.append(user)
    return _mentor_list_