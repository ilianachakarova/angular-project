import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/auth.service';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from '../post-service.service';
import { VotePayload } from './vote-payload.model';
import { VoteType } from './vote-type';
import { VoteService } from './vote.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;
  votePayload: VotePayload;

  constructor( private authService: AuthService,
    private postService: PostServiceService, private toastr: ToastrService, private voteService: VoteService) {
      this.votePayload = {
        voteType: undefined,
        postId: undefined
      }
      //toodo//AuthService loggedIn.subscribe
     }

  ngOnInit(): void {
    // this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote(){
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      // this.updateVoteDetails();
    }, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  // private updateVoteDetails() {
  //   this.postService.getPostById(this.votePayload.postId).subscribe(post => {
  //     this.post = post;
  //   });
  // }
}
