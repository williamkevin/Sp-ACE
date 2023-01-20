from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Table, null
from sqlalchemy.orm import relationship

from database import Base


question_voter = Table(
    'question_voter',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('user.id'), primary_key=True),
    Column('question_id', Integer, ForeignKey('question.id'), primary_key=True)
)

class Question(Base):
    __tablename__ = "question"

    id = Column(Integer, primary_key=True)
    subject = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=True)
    user = relationship("User",foreign_keys = [user_id], backref="question_users")
    modify_date = Column(DateTime, nullable=True)
    voter = relationship('User', secondary=question_voter, backref='question_voters')
    question_to_mentor = Column(Integer, ForeignKey("user.id"), nullable = True) # null 일시 모두가 볼수있는 질문, Null이 아닐시 멘토만 조회가능
    user_mentor = relationship('User',foreign_keys = [question_to_mentor] , backref = 'question_to_mentor')
    evaluation = Column(Integer, nullable = True)
    

    
answer_voter = Table(
    'answer_voter',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('user.id'), primary_key=True),
    Column('answer_id', Integer, ForeignKey('answer.id'), primary_key=True)
)

class Answer(Base):
    __tablename__ = "answer"

    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    question_id = Column(Integer, ForeignKey("question.id"))
    question = relationship("Question", backref="answers") # 질문 외부키로 연결
    user_id = Column(Integer, ForeignKey("user.id"), nullable=True)  
    user = relationship("User", backref="answer_users")
    modify_date = Column(DateTime, nullable=True)
    voter = relationship('User', secondary=answer_voter, backref='answer_voters')


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    job = Column(String, nullable=True)
    college_department = Column(String, nullable=True)
    profile = Column(String, nullable=True)
    is_mentor = Column(Integer, nullable = False)  # 멘토일시 1 멘티일시 0
    admin = Column(Integer , nullable = True) # 관리자 계정일시 1, 일반유저일시 0 이건 데이터베이스에서 관리할 것
    point = Column(Integer, nullable = True) #데이터 베이스로 다룰 예정  더미데이터 
    question_authority = Column(Integer, nullable = True) # 멘티의 질문권한 돈내면 질문 가능
    
