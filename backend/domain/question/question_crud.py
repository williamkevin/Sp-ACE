from datetime import datetime

from domain.question.question_schema import QuestionCreate, QuestionUpdate
from models import Question, User
from sqlalchemy.orm import Session


def get_question_list(db: Session, skip: int = 0, limit: int = 10):  # 모든 질문 개수 가져오기 --> 관리자 모드 일떄 사용할수도
    _question_list = db.query(Question)\
        .order_by(Question.create_date.desc())

    total = _question_list.count()
    question_list = _question_list.offset(skip).limit(limit).all()
    return total, question_list  # (전체 건수, 페이징 적용된 질문 목록)


def get_mentee_question_list( db: Session, User_id: int, skip: int = 0, limit: int = 10, ):
    _question_list = db.query(Question)\
        .order_by(Question.create_date.desc())
    question_list = _question_list.offset(skip).limit(limit).all()
    del_list = []
    for question in (question_list):
  
        if question.user_id != User_id:  ## 질문자와 로그인한 id의 값이 같은지 확인
            del_list.append(question)
    for i in range(len(del_list)):
        question_list.remove(del_list[i])
    total = len(question_list)
    return total, question_list  # (전체 건수, 페이징 적용된 질문 목록)

def get_mentor_question_list( db: Session, User_id: int, skip: int = 0, limit: int = 10, ):
    _question_list = db.query(Question)\
        .order_by(Question.create_date.desc())
    question_list = _question_list.offset(skip).limit(limit).all()
    del_list = []
    for question in (question_list):
  
        if question.question_to_mentor != User_id:  ## 질문자와 로그인한 id의 값이 같은지 확인
            del_list.append(question)
    for i in range(len(del_list)):
        question_list.remove(del_list[i])
    total = len(question_list)
    return total, question_list  # (전체 건수, 페이징 적용된 질문 목록)

def get_question(db: Session, question_id: int):   # 질문 id 받아서 그 질문 return
    question = db.query(Question).get(question_id)
    return question


def create_question(db: Session, question_create: QuestionCreate, user: User):
    db_question = Question(subject=question_create.subject,
                           content=question_create.content,
                           create_date=datetime.now(),
                           user=user,
                           question_to_mentor = question_create.question_to_mentor,
                           
                           )

    db.add(db_question)
    db.commit()


def update_question(db: Session, db_question: Question,
                    question_update: QuestionUpdate):
    db_question.subject = question_update.subject
    db_question.content = question_update.content
    db_question.modify_date = datetime.now()
    db.add(db_question)
    db.commit()

def delete_question(db: Session, db_question: Question):
    db.delete(db_question)
    db.commit()
    
def vote_question(db: Session, db_question: Question, db_user: User):
    db_question.voter.append(db_user)
    db.commit()