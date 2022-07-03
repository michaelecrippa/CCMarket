import { UserProfileDto } from '../models/DTOs/user-profile-dto.model';

class UserProfileService {
  getProfile(): Promise<UserProfileDto> {
    return Promise.resolve({
      name: 'User Loser',
      description: 'I have been wandering the deep web...',
      pictureUri: 'https://static.vecteezy.com/system/resources/previews/006/605/496/original/cartoon-happy-frog-on-white-background-free-vector.jpg',
      assets: [
        {
          name: 'cat',
          price: 22.15,
          pictureUri: 'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip'
        },
        {
          name: 'dog',
          price: 122.15,
          pictureUri: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80'
        },
        {
          name: 'owl',
          price: 22.15,
          pictureUri: 'https://pbs.twimg.com/media/FVXhBTvaIAAwpgC.jpg'
        },
        {
          name: 'parrot',
          price: 22.15,
          pictureUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFkJH4rCewCnvLo3EVdBkSJHXc65qcZE4FA&usqp=CAU'
        }, {
          name: 'monke',
          price: 22.15,
          pictureUri: 'https://i1.sndcdn.com/artworks-wSDztKZNhOSkFRps-qpSMGQ-t500x500.jpg'
        }, {
          name: 'lizzard',
          price: 22.15,
          pictureUri: 'https://media.cntraveler.com/photos/590b484796ac4049cc0edcc0/16:9/w_2560%2Cc_limit/GettyImages-200253900-001.jpg'
        }
      ]
    });
  }
}

const userProfileService = new UserProfileService();
export default userProfileService;